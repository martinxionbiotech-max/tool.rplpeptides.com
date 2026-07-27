/**
 * WebMCP Tool Registrations for tool.rplpeptides.com
 * 
 * Registers all 11 calculator tools for AI agent access via Model Context Protocol.
 * Each tool checks if its calculator exists on the current page before executing.
 */
(function() {
  if (typeof WebMCP === 'undefined') {
    console.warn('WebMCP not loaded — tools not registered');
    return;
  }

  var mcp = new WebMCP({ color: '#3f51b5' });

  // Helper: read text content from an element
  function getText(id) {
    var el = document.getElementById(id);
    return el ? el.textContent : '—';
  }

  // Helper: set value and dispatch input event
  function setVal(id, val) {
    var el = document.getElementById(id);
    if (!el) return false;
    el.value = val;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }

  // Helper: check if tool elements exist on current page
  function hasElements(ids) {
    return ids.every(function(id) { return !!document.getElementById(id); });
  }

  // Helper: build result table
  function resultTable(rows) {
    var html = '<table>';
    rows.forEach(function(r) {
      html += '<tr><td><strong>' + r[0] + '</strong></td><td>' + r[1] + '</td></tr>';
    });
    html += '</table>';
    return html;
  }

  // ============================================================
  // 1. Molecular Weight Calculator
  // ============================================================
  mcp.registerTool(
    'molecular_weight_calculator',
    'Calculate peptide molecular weight, molecular formula, net charge, and extinction coefficient from amino acid sequence. Supports N-terminal/C-terminal modifications and disulfide bridges.',
    {
      type: 'object',
      properties: {
        sequence: {
          type: 'string',
          description: 'Amino acid sequence in one-letter code (e.g., YQVAD). Supports ACDEFGHIKLMNPQRSTVWY.'
        },
        nterm_mod: {
          type: 'string',
          enum: ['none', 'acetyl', 'pyroglutamic', 'formyl'],
          description: 'N-terminal modification'
        },
        cterm_mod: {
          type: 'string',
          enum: ['none', 'amide', 'free_acid'],
          description: 'C-terminal modification'
        },
        disulfide_bridges: {
          type: 'integer',
          description: 'Number of disulfide bridges'
        },
        mass_type: {
          type: 'string',
          enum: ['monoisotopic', 'average'],
          description: 'Mass type to calculate'
        }
      },
      required: ['sequence']
    },
    function(args) {
      if (!hasElements(['sequence', 'res-mw'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Molecular Weight Calculator page at /molecular-weight-calculator/' }] };
      }
      setVal('sequence', args.sequence || 'YQVAD');
      if (args.nterm_mod) setVal('mod-nterm', args.nterm_mod);
      if (args.cterm_mod) setVal('mod-cterm', args.cterm_mod);
      if (args.disulfide_bridges) setVal('disulfide', String(args.disulfide_bridges));
      if (args.mass_type) setVal('mass-type', args.mass_type);
      calcMW();
      return {
        content: [{
          type: 'text',
          text: 'Molecular Weight Results:\n\n' +
            'Molecular Weight: ' + getText('res-mw') + '\n' +
            'Molecular Formula: ' + getText('res-formula') + '\n' +
            'Net Charge (pH 7): ' + getText('res-charge') + '\n' +
            'Extinction Coefficient: ' + getText('res-extinction')
        }]
      };
    }
  );

  // ============================================================
  // 2. Peptide Properties Calculator
  // ============================================================
  mcp.registerTool(
    'peptide_properties_calculator',
    'Calculate full physicochemical properties of a peptide: molecular weight, isoelectric point (pI), net charge at specified pH, hydrophobicity (GRAVY), instability index, and amino acid composition.',
    {
      type: 'object',
      properties: {
        sequence: { type: 'string', description: 'Amino acid sequence in one-letter code' },
        ph: { type: 'number', description: 'pH for net charge calculation (default 7.0)' },
        nterm_mod: { type: 'string', enum: ['none', 'acetyl', 'free'], description: 'N-terminal modification' }
      },
      required: ['sequence']
    },
    function(args) {
      if (!hasElements(['prop-seq'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Peptide Properties Calculator page.' }] };
      }
      setVal('prop-seq', args.sequence || 'YQVAD');
      if (args.ph) setVal('prop-ph', String(args.ph));
      if (args.nterm_mod) setVal('prop-mod', args.nterm_mod);
      calcProperties();
      return {
        content: [{
          type: 'text',
          text: 'Peptide Properties:\n\n' +
            'Length: ' + getText('prop-length') + '\n' +
            'Molecular Weight: ' + getText('prop-mw') + '\n' +
            'Average MW: ' + getText('prop-mw-avg') + '\n' +
            'Isoelectric Point (pI): ' + getText('prop-pi') + '\n' +
            'Net Charge: ' + getText('prop-charge') + '\n' +
            'GRAVY Score: ' + getText('prop-gravy') + '\n' +
            'Instability Index: ' + getText('prop-instability')
        }]
      };
    }
  );

  // ============================================================
  // 3. Dilution Calculator
  // ============================================================
  mcp.registerTool(
    'dilution_calculator',
    'Calculate reconstitution volume or dilution volumes for peptide solutions. Given peptide amount and desired concentration, calculate the volume of solvent needed.',
    {
      type: 'object',
      properties: {
        mass: { type: 'number', description: 'Peptide amount' },
        mass_unit: { type: 'string', enum: ['mg', 'ug', 'g'], description: 'Unit of mass' },
        concentration: { type: 'number', description: 'Desired concentration' },
        conc_unit: { type: 'string', enum: ['mgml', 'mm', 'um'], description: 'Concentration unit (mg/mL, mM, µM)' },
        mw: { type: 'number', description: 'Molecular weight in Da (required for mM/µM units)' }
      },
      required: ['mass', 'concentration']
    },
    function(args) {
      if (!hasElements(['dil-mass'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Dilution Calculator page.' }] };
      }
      setVal('dil-mass', String(args.mass));
      if (args.mass_unit) setVal('dil-mass-unit', args.mass_unit);
      setVal('dil-conc', String(args.concentration));
      if (args.conc_unit) setVal('dil-conc-unit', args.conc_unit);
      if (args.mw) setVal('dil-mw', String(args.mw));
      calcDilution();
      return {
        content: [{
          type: 'text',
          text: 'Dilution Results:\n\n' +
            'Reconstitution Volume: ' + getText('dil-vol') + '\n' +
            'Final Concentration: ' + getText('dil-final') + '\n' +
            'Mass Needed: ' + getText('dil-mass-result')
        }]
      };
    }
  );

  // ============================================================
  // 4. Molarity Calculator
  // ============================================================
  mcp.registerTool(
    'molarity_calculator',
    'Convert between peptide mass and molarity, or calculate mass needed for a target molarity. Supports mg/mL, mM, µM, and nmol units.',
    {
      type: 'object',
      properties: {
        mode: {
          type: 'string',
          enum: ['mass_to_molarity', 'target_molarity_to_mass'],
          description: 'Calculation mode'
        },
        mass: { type: 'number', description: 'Peptide mass (for mode: mass_to_molarity)' },
        mass_unit: { type: 'string', enum: ['mg', 'ug', 'g'], description: 'Mass unit' },
        mw: { type: 'number', description: 'Molecular weight in Da (required for all modes)' },
        volume: { type: 'number', description: 'Volume of solution' },
        vol_unit: { type: 'string', enum: ['ml', 'l', 'ul'], description: 'Volume unit' },
        target_conc: { type: 'number', description: 'Target concentration (for mode: target_molarity_to_mass)' },
        target_conc_unit: { type: 'string', enum: ['um', 'mm', 'm'], description: 'Target concentration unit' }
      },
      required: ['mode', 'mw']
    },
    function(args) {
      if (!hasElements(['mol-mass'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Molarity Calculator page.' }] };
      }
      if (args.mode === 'mass_to_molarity') {
        if (!args.mass) return { content: [{ type: 'text', text: 'Mass is required for mass_to_molarity mode.' }] };
        setVal('mol-mass', String(args.mass));
        if (args.mass_unit) setVal('mol-mass-unit', args.mass_unit);
        setVal('mol-mw', String(args.mw));
        setVal('mol-vol', String(args.volume || 1));
        if (args.vol_unit) setVal('mol-vol-unit', args.vol_unit);
        calcMolarity();
        return {
          content: [{
            type: 'text',
            text: 'Molarity Results:\n\n' +
              'Molarity: ' + getText('mol-molarity') + '\n' +
              'Amount (nmol): ' + getText('mol-nmol') + '\n' +
              'Concentration (mg/mL): ' + getText('mol-conc-mgml') + '\n' +
              'Concentration (µM): ' + getText('mol-conc-um')
          }]
        };
      } else {
        if (!args.target_conc) return { content: [{ type: 'text', text: 'Target concentration is required.' }] };
        setVal('mol-target', String(args.target_conc));
        if (args.target_conc_unit) setVal('mol-target-unit', args.target_conc_unit);
        setVal('mol-tgt-mw', String(args.mw));
        setVal('mol-tgt-vol', String(args.volume || 1));
        if (args.vol_unit) setVal('mol-tgt-vol-unit', args.vol_unit);
        calcMassFromMolarity();
        return {
          content: [{
            type: 'text',
            text: 'Required Mass:\n\n' +
              'Peptide Mass Needed: ' + getText('mol-tgt-mass') + '\n' +
              'Total nmol: ' + getText('mol-tgt-nmol')
          }]
        };
      }
    }
  );

  // ============================================================
  // 5. Purity Calculator
  // ============================================================
  mcp.registerTool(
    'purity_calculator',
    'Calculate active peptide mass accounting for stated purity. Adjusts total peptide mass for HPLC purity percentage.',
    {
      type: 'object',
      properties: {
        purity: { type: 'number', description: 'Stated HPLC purity percentage (0-100)' },
        amount: { type: 'number', description: 'Total peptide amount' },
        amount_unit: { type: 'string', enum: ['mg', 'ug', 'g'], description: 'Amount unit' },
        mw: { type: 'number', description: 'Molecular weight in Da (optional, for molar corrected values)' }
      },
      required: ['purity', 'amount']
    },
    function(args) {
      if (!hasElements(['pur-stated'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Purity Calculator page.' }] };
      }
      setVal('pur-stated', String(args.purity));
      setVal('pur-amount', String(args.amount));
      if (args.amount_unit) setVal('pur-unit', args.amount_unit);
      if (args.mw) setVal('pur-mw', String(args.mw));
      calcPurity();
      return {
        content: [{
          type: 'text',
          text: 'Purity Adjustment Results:\n\n' +
            'Active Peptide Mass: ' + getText('pur-active') + '\n' +
            'Impurity Mass: ' + getText('pur-impurity') + '\n' +
            'Purity Percentage: ' + getText('pur-pct')
        }]
      };
    }
  );

  // ============================================================
  // 6. Peptide Comparison Tool
  // ============================================================
  mcp.registerTool(
    'peptide_comparison_tool',
    'Compare multiple peptides side-by-side. User should select peptides on the page manually.',
    {
      type: 'object',
      properties: {},
      required: []
    },
    function() {
      if (!hasElements(['comp-result'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Peptide Comparison Tool page.' }] };
      }
      comparePeptides();
      return {
        content: [{ type: 'text', text: 'Peptide comparison updated. Please check the comparison table on the page for results.' }]
      };
    }
  );

  // ============================================================
  // 7. Storage Stability Calculator
  // ============================================================
  mcp.registerTool(
    'storage_calculator',
    'Calculate peptide storage stability and shelf-life estimates based on peptide form, storage temperature, and environmental conditions.',
    {
      type: 'object',
      properties: {
        form: {
          type: 'string',
          enum: ['lyophilized', 'solution', 'lyophilized_salt'],
          description: 'Peptide form'
        },
        temperature: {
          type: 'string',
          enum: ['minus_80', 'minus_20', '4c', 'room_temp'],
          description: 'Storage temperature'
        },
        peptide_type: {
          type: 'string',
          enum: ['standard', 'modified', 'cyclic'],
          description: 'Peptide type'
        },
        environment: {
          type: 'string',
          enum: ['normal', 'oxygen_sensitive', 'light_sensitive'],
          description: 'Storage environment'
        }
      },
      required: ['form']
    },
    function(args) {
      if (!hasElements(['st-form'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Storage Calculator page.' }] };
      }
      setVal('st-form', args.form || 'lyophilized');
      if (args.temperature) setVal('st-temp', args.temperature);
      if (args.peptide_type) setVal('st-type', args.peptide_type);
      if (args.environment) setVal('st-environment', args.environment);
      calcStorage();
      return {
        content: [{
          type: 'text',
          text: 'Storage Stability Results:\n\n' +
            'Estimated Shelf Life: ' + getText('st-shelf') + '\n' +
            'Freeze-Thaw Stability: ' + getText('st-ft') + '\n' +
            'Recommendation: ' + getText('st-recommend') + '\n' +
            'Notes: ' + getText('st-notes')
        }]
      };
    }
  );

  // ============================================================
  // 8. Amino Acid Code Converter
  // ============================================================
  mcp.registerTool(
    'amino_acid_converter',
    'Convert between amino acid one-letter codes, three-letter codes, and full names. Supports standard 20 amino acids.',
    {
      type: 'object',
      properties: {
        mode: {
          type: 'string',
          enum: ['one_to_three', 'three_to_one', 'name_to_one', 'one_to_name'],
          description: 'Conversion direction'
        },
        input: { type: 'string', description: 'Amino acid codes to convert' }
      },
      required: ['mode', 'input']
    },
    function(args) {
      if (!hasElements(['aa-convert-mode'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Amino Acid Converter page.' }] };
      }
      setVal('aa-convert-mode', args.mode);
      setVal('aa-input', args.input);
      convertAA();
      return {
        content: [{
          type: 'text',
          text: 'Conversion Result:\n' + getText('aa-output')
        }]
      };
    }
  );

  // ============================================================
  // 9. Peptide Solubility Predictor
  // ============================================================
  mcp.registerTool(
    'solubility_predictor',
    'Predict peptide solubility based on sequence, pH, and solvent type. Returns solubility grade, GRAVY score, and net charge density.',
    {
      type: 'object',
      properties: {
        sequence: { type: 'string', description: 'Amino acid sequence in one-letter code' },
        ph: { type: 'number', description: 'Target pH (default 7.0)' },
        solvent: {
          type: 'string',
          enum: ['water', 'pbs', 'dmso', 'acetic_acid'],
          description: 'Solvent type'
        }
      },
      required: ['sequence']
    },
    function(args) {
      if (!hasElements(['sol-seq'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Solubility Predictor page.' }] };
      }
      setVal('sol-seq', args.sequence || 'YQVAD');
      if (args.ph) setVal('sol-ph', String(args.ph));
      if (args.solvent) setVal('sol-solvent', args.solvent);
      predictSolubility();
      return {
        content: [{
          type: 'text',
          text: 'Solubility Prediction Results:\n\n' +
            'Solubility Grade: ' + getText('sol-grade') + '\n' +
            'Suggested Solvent: ' + getText('sol-suggested') + '\n' +
            'GRAVY Score: ' + getText('sol-gravy') + '\n' +
            'Net Charge (pH ' + getText('sol-ph-label') + '): ' + getText('sol-charge') + '\n' +
            'Charge Density: ' + getText('sol-charge-dens')
        }]
      };
    }
  );

  // ============================================================
  // 10. Buffer Preparation Calculator
  // ============================================================
  mcp.registerTool(
    'buffer_preparation_calculator',
    'Calculate buffer component amounts for common laboratory buffers: PBS, Tris-HCl, HEPES, acetate, citrate, and phosphate. Provides exact masses and volumes for buffer preparation.',
    {
      type: 'object',
      properties: {
        buffer_type: {
          type: 'string',
          enum: ['pbs', 'tris', 'hepes', 'acetate', 'citrate', 'phosphate'],
          description: 'Type of buffer to prepare'
        },
        concentration: { type: 'number', description: 'Target concentration in mM' },
        volume: { type: 'number', description: 'Target volume in mL' },
        ph: { type: 'number', description: 'Target pH' },
        nacl: { type: 'number', description: 'NaCl concentration in mM (for PBS only)' }
      },
      required: ['buffer_type', 'concentration', 'volume']
    },
    function(args) {
      if (!hasElements(['buf-type'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Buffer Preparation Calculator page.' }] };
      }
      setVal('buf-type', args.buffer_type || 'pbs');
      setVal('buf-conc', String(args.concentration));
      setVal('buf-vol', String(args.volume));
      if (args.ph) setVal('buf-ph', String(args.ph));
      if (args.nacl) setVal('buf-nacl', String(args.nacl));
      calcBuffer();
      return {
        content: [{
          type: 'text',
          text: 'Buffer Recipe Results:\n\n' +
            'Summary: ' + getText('buf-summary') + '\n' +
            'Instructions: ' + (document.getElementById('buf-instructions') ? document.getElementById('buf-instructions').textContent : 'See page for component details.')
        }]
      };
    }
  );

  // ============================================================
  // 11. Peptide Amount Conversion Calculator
  // ============================================================
  mcp.registerTool(
    'amount_conversion_calculator',
    'Convert between subject weight, amount per kg, peptide mass, purity, and injection volume for peptide research calculations. Accounts for purity correction.',
    {
      type: 'object',
      properties: {
        body_weight: { type: 'number', description: 'Subject weight' },
        weight_unit: { type: 'string', enum: ['g', 'kg'], description: 'Weight unit' },
        amount_per_kg: { type: 'number', description: 'Amount per kg' },
        amount_unit: { type: 'string', enum: ['ugkg', 'mgkg'], description: 'Amount per kg unit' },
        peptide_mass: { type: 'number', description: 'Peptide mass in vial' },
        mass_unit: { type: 'string', enum: ['mg', 'ug'], description: 'Mass unit' },
        purity: { type: 'number', description: 'Reported purity percentage (0-100)' },
        recon_volume: { type: 'number', description: 'Reconstitution volume in mL' },
        fixed_injection_vol: { type: 'number', description: 'Fixed injection volume in µL (optional)' }
      },
      required: ['body_weight', 'amount_per_kg', 'peptide_mass', 'purity', 'recon_volume']
    },
    function(args) {
      if (!hasElements(['amt-body-weight'])) {
        return { content: [{ type: 'text', text: 'Please navigate to the Amount Conversion Calculator page.' }] };
      }
      setVal('amt-body-weight', String(args.body_weight));
      if (args.weight_unit) setVal('amt-weight-unit', args.weight_unit);
      setVal('amt-dose', String(args.amount_per_kg));
      if (args.amount_unit) setVal('amt-dose-unit', args.amount_unit);
      setVal('amt-mass', String(args.peptide_mass));
      if (args.mass_unit) setVal('amt-mass-unit', args.mass_unit);
      setVal('amt-purity', String(args.purity));
      setVal('amt-volume', String(args.recon_volume));
      if (args.fixed_injection_vol) setVal('amt-injection', String(args.fixed_injection_vol));
      calcAmount();
      return {
        content: [{
          type: 'text',
          text: 'Amount Conversion Results:\n\n' +
            'Subject Weight: ' + getText('amt-r-weight') + '\n' +
            'Target Amount per kg: ' + getText('amt-r-dose') + '\n' +
            'Total Amount Required: ' + getText('amt-r-total') + '\n' +
            'Effective Peptide in Vial: ' + getText('amt-r-effective') + '\n' +
            'Vial Concentration: ' + getText('amt-r-conc') + '\n' +
            'Calculated Volume: ' + getText('amt-r-volume')
        }]
      };
    }
  );

  console.log('WebMCP: Registered ' + mcp.registeredTools.size + ' tools for tool.rplpeptides.com');
})();
