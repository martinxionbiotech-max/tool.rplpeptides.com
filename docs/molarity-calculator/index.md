---
title: Molarity Calculator — Peptide Concentration Converter
description: Free online molarity calculator for peptide research — convert between mg/mL, µM, mM, and nmol. Calculate molarity from mass and MW, or mass needed for target molarity.
---

# Molarity Calculator

Convert between concentration units for peptide solutions. Calculate molarity from mass and molecular weight, or determine the mass needed to achieve a target molarity.

---

## Calculator

<div class="calc-card">
  <h3 style="margin-top:0;">Mode 1: Mass → Molarity</h3>
  <p style="font-size:0.9rem;margin-bottom:1rem;">Calculate molarity from peptide mass and molecular weight.</p>

  <label for="mol-mass">Mass</label>
  <div style="display:flex; gap:0.5rem;">
    <input type="number" id="mol-mass" value="10" step="0.1" min="0" style="flex:2;">
    <select id="mol-mass-unit" style="flex:1;">
      <option value="mg">mg</option>
      <option value="ug">µg</option>
      <option value="g">g</option>
    </select>
  </div>

  <label for="mol-mw">Molecular Weight (Da)</label>
  <input type="number" id="mol-mw" value="1000" step="0.1" min="0">

  <label for="mol-vol">Volume</label>
  <div style="display:flex; gap:0.5rem;">
    <input type="number" id="mol-vol" value="1" step="0.1" min="0" style="flex:2;">
    <select id="mol-vol-unit" style="flex:1;">
      <option value="ml">mL</option>
      <option value="l">L</option>
      <option value="ul">µL</option>
    </select>
  </div>

  <button class="calc-btn" onclick="calcMolarity()">Calculate Molarity</button>

  <div id="mol-result" class="calc-result">
    <h3>Concentration Results</h3>
    <table>
      <tr><td>Molarity</td><td id="mol-molarity">—</td></tr>
      <tr><td>Amount (nmol)</td><td id="mol-nmol">—</td></tr>
      <tr><td>Concentration (mg/mL)</td><td id="mol-conc-mgml">—</td></tr>
      <tr><td>Concentration (µM)</td><td id="mol-conc-um">—</td></tr>
    </table>
  </div>
</div>

<div class="calc-card">
  <h3 style="margin-top:0;">Mode 2: Target Molarity → Required Mass</h3>
  <p style="font-size:0.9rem;margin-bottom:1rem;">Calculate the peptide mass needed to reach a target molarity.</p>

  <label for="mol-target">Target Concentration</label>
  <div style="display:flex; gap:0.5rem;">
    <input type="number" id="mol-target" value="100" step="0.1" min="0" style="flex:2;">
    <select id="mol-target-unit" style="flex:1;">
      <option value="um">µM</option>
      <option value="mm">mM</option>
      <option value="m">M</option>
    </select>
  </div>

  <label for="mol-tgt-mw">Molecular Weight (Da)</label>
  <input type="number" id="mol-tgt-mw" value="1000" step="0.1" min="0">

  <label for="mol-tgt-vol">Desired Volume</label>
  <div style="display:flex; gap:0.5rem;">
    <input type="number" id="mol-tgt-vol" value="1" step="0.1" min="0" style="flex:2;">
    <select id="mol-tgt-vol-unit" style="flex:1;">
      <option value="ml">mL</option>
      <option value="l">L</option>
      <option value="ul">µL</option>
    </select>
  </div>

  <button class="calc-btn" onclick="calcMassFromMolarity()">Calculate Required Mass</button>

  <div id="mol-tgt-result" class="calc-result">
    <h3>Required Mass</h3>
    <table>
      <tr><td>Peptide Mass Needed</td><td id="mol-tgt-mass">—</td></tr>
      <tr><td>Total nmol</td><td id="mol-tgt-nmol">—</td></tr>
    </table>
  </div>
</div>

<div class="principle-box" markdown="1">
  <h3>How Molarity Calculations Work</h3>
  <p><strong>Molarity</strong> (M) is the number of <strong>moles of solute per liter of solution</strong>. It is the standard concentration unit in chemistry and molecular biology because it directly describes the number of molecules — not just the mass — present in solution.</p>
  <p>The fundamental relationship is:</p>
  <p style="text-align:center;font-size:1.2rem;font-weight:bold;font-family:monospace;">C = n / V = m / (MW × V)</p>
  <p>Where <em>C</em> = concentration (M), <em>n</em> = amount (mol), <em>V</em> = volume (L), <em>m</em> = mass (g), and <em>MW</em> = molecular weight (Da, equivalent to g/mol).</p>
  <p><strong>Why molarity over mass concentration?</strong> Molarity tells you the actual number of molecules in solution. Two peptides at 1 mg/mL may have very different molar concentrations if their molecular weights differ. For reactions, binding studies, and dose-response experiments, it is the number of molecules — not the mass — that matters.</p>
  <p><strong>Unit relationships:</strong></p>
  <ul>
    <li><strong>mg/mL</strong> is a <em>mass concentration</em> — it does not depend on MW</li>
    <li><strong>mM</strong> (millimolar) = 10⁻³ M — a <em>molar concentration</em> that depends on MW</li>
    <li><strong>µM</strong> (micromolar) = 10⁻⁶ M — standard for most peptide assays</li>
    <li>Converting between them: <strong>mM = (mg/mL) × 1000 / MW</strong></li>
  </ul>
</div>

<div class="formula-box" markdown="1">
  <h3>Core Formulas</h3>
  <div class="formula-block">
    <p class="formula-title">Molarity from mass and volume:</p>
    <p style="text-align:center;font-size:1.1rem;font-weight:bold;font-family:monospace;">C (M) = m (g) / (MW × V (L))</p>
  </div>
  <div class="formula-block">
    <p class="formula-title">Molarity in mM (practical lab form):</p>
    <p style="text-align:center;font-size:1.1rem;font-weight:bold;font-family:monospace;">C (mM) = [m (mg) / (MW × V (mL))] × 1000</p>
  </div>
  <div class="formula-block">
    <p class="formula-title">Mass needed for target molarity:</p>
    <p style="text-align:center;font-size:1.1rem;font-weight:bold;font-family:monospace;">m (mg) = C (mM) × MW × V (mL) / 1000</p>
  </div>
  <p><strong>Variable definitions:</strong></p>
  <ul>
    <li><strong>C</strong> = concentration (M — mol/L; mM — mmol/L)</li>
    <li><strong>m</strong> = mass of peptide (g or mg)</li>
    <li><strong>MW</strong> = molecular weight (Da, g/mol)</li>
    <li><strong>V</strong> = volume of solution (L or mL)</li>
    <li><strong>n</strong> = amount of substance (mol or mmol)</li>
  </ul>
</div>

<div class="example-box">
  <h3>Worked Examples</h3>

  <div class="example-card">
    <h4>Example 1: Peptide mass → Molarity</h4>
    <p><strong>Given:</strong> 10 mg of a peptide (MW = 1,000 Da) dissolved in 1 mL of buffer.</p>
    <p><strong>Step 1:</strong> Convert mass to grams → 10 mg = 0.010 g</p>
    <p><strong>Step 2:</strong> Convert volume to liters → 1 mL = 0.001 L</p>
    <p><strong>Step 3:</strong> Apply C = m / (MW × V)</p>
    <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
      C = 0.010 g / (1,000 g/mol × 0.001 L) = <strong>0.01 M</strong>
    </p>
    <p><strong>Step 4:</strong> Convert to convenient units</p>
    <ul>
      <li>0.01 M = <strong>10 mM</strong></li>
      <li>0.01 M = <strong>10,000 µM</strong></li>
      <li>Amount = 0.01 M × 0.001 L × 10⁹ = <strong>10,000 nmol</strong></li>
    </ul>
    <p><em>Alternatively, using the practical formula:</em> C(mM) = [10 mg / (1,000 × 1 mL)] × 1000 = <strong>10 mM</strong> ✓</p>
  </div>

  <div class="example-card">
    <h4>Example 2: Target Molarity → Peptide mass</h4>
    <p><strong>Given:</strong> Need 500 µL of a 100 µM peptide solution. MW = 500 Da.</p>
    <p><strong>Step 1:</strong> Convert target concentration to M → 100 µM = 100 × 10⁻⁶ M = 10⁻⁴ M</p>
    <p><strong>Step 2:</strong> Convert volume to liters → 500 µL = 500 × 10⁻⁶ L = 5 × 10⁻⁴ L</p>
    <p><strong>Step 3:</strong> Apply m = C × MW × V</p>
    <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
      m = (100 × 10⁻⁶ M) × (500 g/mol) × (500 × 10⁻⁶ L)
    </p>
    <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
      m = 2.5 × 10⁻⁵ g = <strong>0.025 mg</strong> (25 µg)
    </p>
    <p><strong>Step 4:</strong> Using the practical formula in common units:</p>
    <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
      m(mg) = 0.1 mM × 500 × 0.5 mL / 1000 = <strong>0.025 mg</strong> ✓
    </p>
    <p><strong>Result:</strong> Weigh <strong>25 µg</strong> of peptide and dissolve in 500 µL of buffer to obtain a 100 µM solution.</p>
  </div>
</div>

<div class="conversion-box">
  <h3>Unit Conversion Reference</h3>
  <p><strong>Molar concentration unit relationships:</strong></p>
  <ul>
    <li><strong>1 M</strong> = 1,000 mM = 1,000,000 µM</li>
    <li><strong>1 mM</strong> = 0.001 M = 1,000 µM</li>
    <li><strong>1 µM</strong> = 0.001 mM = 10⁻⁶ M</li>
  </ul>
  <p><strong>Mass-to-molar conversion for a given MW:</strong></p>
  <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
    1 mg/mL = (1000 / MW) mM &nbsp;|&nbsp; 1 mM = (MW / 1000) mg/mL
  </p>
  <p><strong>Quick lookup table</strong> — mg/mL to mM for common peptide MWs:</p>
  <table>
    <thead>
      <tr><th>MW (Da)</th><th>1 mg/mL =</th><th>1 mM =</th><th>10 mg/mL =</th></tr>
    </thead>
    <tbody>
      <tr><td>500</td><td>2.000 mM</td><td>0.500 mg/mL</td><td>20.00 mM</td></tr>
      <tr><td>1,000</td><td>1.000 mM</td><td>1.000 mg/mL</td><td>10.00 mM</td></tr>
      <tr><td>1,500</td><td>0.667 mM</td><td>1.500 mg/mL</td><td>6.67 mM</td></tr>
      <tr><td>2,000</td><td>0.500 mM</td><td>2.000 mg/mL</td><td>5.00 mM</td></tr>
      <tr><td>3,000</td><td>0.333 mM</td><td>3.000 mg/mL</td><td>3.33 mM</td></tr>
      <tr><td>5,000</td><td>0.200 mM</td><td>5.000 mg/mL</td><td>2.00 mM</td></tr>
      <tr><td>10,000</td><td>0.100 mM</td><td>10.000 mg/mL</td><td>1.00 mM</td></tr>
    </tbody>
  </table>
</div>

<div class="faq-box">
  <h3>Frequently Asked Questions</h3>

  <details>
    <summary><strong>What's the difference between molarity and molality?</strong></summary>
    <p><strong>Molarity (M)</strong> is moles of solute per <em>liter of solution</em>. It depends on volume, which changes with temperature.</p>
    <p><strong>Molality (m)</strong> is moles of solute per <em>kilogram of solvent</em>. It is temperature-independent because it is based on mass, not volume.</p>
    <p>In peptide research, <strong>molarity is far more common</strong> because volumes are convenient to measure with pipettes and volumetric flasks. Molality is typically used in physical chemistry studies involving colligative properties (boiling point elevation, freezing point depression).</p>
  </details>

  <details>
    <summary><strong>Why do I need the molecular weight for molarity but not mg/mL?</strong></summary>
    <p><strong>mg/mL</strong> is a <em>mass concentration</em> — it simply expresses how much mass is dissolved per volume. It requires no information about the substance itself.</p>
    <p><strong>Molarity</strong> expresses <em>number of molecules</em> per volume. To convert between mass and number of molecules, you need the molecular weight, which acts as a "molecular exchange rate" — telling you how many grams correspond to one mole (6.022 × 10²³ molecules).</p>
  </details>

  <details>
    <summary><strong>How do I make a precise molar solution from a small peptide amount?</strong></summary>
    <ol>
      <li>Determine the exact peptide mass (accounting for purity and counterion content if applicable).</li>
      <li>Choose a target concentration appropriate for your intended use (typically 1–10 mM for stock solutions).</li>
      <li>Calculate the required volume using: V(mL) = m(mg) × 1000 / (C(mM) × MW)</li>
      <li>For very small peptide amounts (&lt;1 mg), use a microbalance and prepare a larger volume of a more dilute stock, or prepare a small volume in a microcentrifuge tube.</li>
      <li>Always vortex and sonicate to ensure complete dissolution, especially for hydrophobic peptides.</li>
    </ol>
  </details>

  <details>
    <summary><strong>What's the relationship between mM and mg/mL?</strong></summary>
    <p>The two are directly linked by molecular weight:</p>
    <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
      <strong>mM = (mg/mL) × 1000 / MW</strong>
    </p>
    <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
      <strong>mg/mL = (mM × MW) / 1000</strong>
    </p>
    <p>For example, a peptide with MW = 1,000 Da at 1 mg/mL is 1 mM. The same mass concentration of a peptide with MW = 500 Da would be 2 mM — twice as many molecules per mL because each molecule weighs half as much.</p>
  </details>

  <details>
    <summary><strong>Can I use this calculator for stock solution preparation?</strong></summary>
    <p><strong>Yes.</strong> The calculator is ideal for stock solution preparation. Use <strong>Mode 1</strong> (Mass → Molarity) to check the concentration of a stock you have already prepared, or <strong>Mode 2</strong> (Target Molarity → Mass) to calculate exactly how much peptide to weigh for a desired stock concentration.</p>
    <p>For best results:</p>
    <ul>
      <li>Prepare stocks at 1–10 mM for most peptides</li>
      <li>Use our <a href="../dilution-calculator/">Dilution Calculator</a> to plan serial dilutions from your stock</li>
      <li>Account for peptide purity and salt/counterion content — use our <a href="../purity-calculator/">Purity Calculator</a> for precise adjustments</li>
      <li>Store peptide stocks aliquoted at −20°C or −80°C to avoid freeze-thaw degradation</li>
    </ul>
  </details>
</div>

---

## Quick Conversion Reference

| Mass (mg) | MW (Da) | Vol (mL) | Molarity |
|-----------|---------|----------|----------|
| 1 | 1,000 | 1 | 1.0 mM |
| 5 | 1,000 | 1 | 5.0 mM |
| 10 | 1,000 | 1 | 10.0 mM |
| 5 | 500 | 1 | 10.0 mM |
| 10 | 5,000 | 1 | 2.0 mM |

---

## Formula

**Molarity (M) = mass (g) / (MW (Da) × volume (L))**

To convert to common units:
- **mM** = M × 1,000
- **µM** = M × 1,000,000
- **nmol** = molarity (M) × volume (L) × 10⁹

---

## Related Tools

- [Dilution Calculator](../dilution-calculator/) — Calculate reconstitution volumes
- [Purity Calculator](../purity-calculator/) — Account for purity in mass calculations
- [Molecular Weight Calculator](../molecular-weight-calculator/) — Calculate MW from sequence

<script>
function calcMolarity() {
  const mass = parseFloat(document.getElementById('mol-mass').value);
  const massUnit = document.getElementById('mol-mass-unit').value;
  const mw = parseFloat(document.getElementById('mol-mw').value);
  const vol = parseFloat(document.getElementById('mol-vol').value);
  const volUnit = document.getElementById('mol-vol-unit').value;

  if (!mass || !mw || !vol) {
    document.getElementById('mol-result').style.display = 'block';
    document.getElementById('mol-molarity').textContent = 'Please enter all values';
    return;
  }

  // Mass to grams
  let massG = mass;
  if (massUnit === 'mg') massG = mass / 1000;
  if (massUnit === 'ug') massG = mass / 1e6;

  // Volume to liters
  let volL = vol;
  if (volUnit === 'ml') volL = vol / 1000;
  if (volUnit === 'ul') volL = vol / 1e6;

  // Molarity
  const molarityM = massG / (mw * volL);
  const molarityUM = molarityM * 1e6;
  const molarityMM = molarityM * 1000;
  const nmol = molarityM * volL * 1e9;
  const mgml = massG * 1000 / (volL * 1000);

  document.getElementById('mol-result').style.display = 'block';
  document.getElementById('mol-molarity').textContent = molarityMM.toFixed(3) + ' mM (' + molarityUM.toFixed(2) + ' µM)';
  document.getElementById('mol-nmol').textContent = nmol.toFixed(2) + ' nmol';
  document.getElementById('mol-conc-mgml').textContent = mgml.toFixed(3) + ' mg/mL';
  document.getElementById('mol-conc-um').textContent = molarityUM.toFixed(2) + ' µM';
  document.getElementById('mol-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function calcMassFromMolarity() {
  const target = parseFloat(document.getElementById('mol-target').value);
  const targetUnit = document.getElementById('mol-target-unit').value;
  const mw = parseFloat(document.getElementById('mol-tgt-mw').value);
  const vol = parseFloat(document.getElementById('mol-tgt-vol').value);
  const volUnit = document.getElementById('mol-tgt-vol-unit').value;

  if (!target || !mw || !vol) {
    document.getElementById('mol-tgt-result').style.display = 'block';
    document.getElementById('mol-tgt-mass').textContent = 'Please enter all values';
    return;
  }

  // Target to M
  let targetM = target;
  if (targetUnit === 'um') targetM = target / 1e6;
  if (targetUnit === 'mm') targetM = target / 1000;

  // Volume to L
  let volL = vol;
  if (volUnit === 'ml') volL = vol / 1000;
  if (volUnit === 'ul') volL = vol / 1e6;

  // Mass = M * MW * V
  const massG = targetM * mw * volL;
  const massMg = massG * 1000;
  const nmol = targetM * volL * 1e9;

  document.getElementById('mol-tgt-result').style.display = 'block';
  document.getElementById('mol-tgt-mass').textContent = massMg.toFixed(3) + ' mg (' + (massG*1e6).toFixed(1) + ' µg)';
  document.getElementById('mol-tgt-nmol').textContent = nmol.toFixed(2) + ' nmol';
  document.getElementById('mol-tgt-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>
