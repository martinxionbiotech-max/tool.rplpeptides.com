---
title: Peptide Dilution Calculator
description: Free online peptide dilution calculator — calculate solvent volume needed to achieve target concentration from peptide mass. Essential for peptide reconstitution and research protocols.
---

# Peptide Dilution Calculator <span class="tag-popular">POPULAR</span>

Calculate the solvent volume required to reconstitute a peptide to a target concentration. Essential for preparing research solutions from lyophilized peptide.

**Keywords:** peptide dilution calculator, peptide reconstitution calculator, peptide solvent calculator, reconstitution volume

---

## Calculator

<div class="calc-card">
  <label for="dil-mass">Peptide Amount</label>
  <div style="display:flex; gap:0.5rem;">
    <input type="number" id="dil-mass" value="5" step="0.1" min="0" style="flex:2;">
    <select id="dil-mass-unit" style="flex:1;">
      <option value="mg">mg</option>
      <option value="ug">µg</option>
      <option value="g">g</option>
    </select>
  </div>

  <label for="dil-conc">Desired Concentration</label>
  <div style="display:flex; gap:0.5rem;">
    <input type="number" id="dil-conc" value="2" step="0.1" min="0" style="flex:2;">
    <select id="dil-conc-unit" style="flex:1;">
      <option value="mgml">mg/mL</option>
      <option value="ugml">µg/mL</option>
      <option value="mm">mM</option>
      <option value="um">µM</option>
    </select>
  </div>

  <div id="dil-mw-field" style="display:none;">
    <label for="dil-mw">Molecular Weight (Da) — required for mM/µM</label>
    <input type="number" id="dil-mw" value="1000" step="0.1" min="0">
  </div>

  <button class="calc-btn" onclick="calcDilution()">Calculate Solvent Volume</button>
  <button class="calc-btn secondary" onclick="clearDil()" style="margin-left:0.5rem;">Clear</button>

  <div id="dil-result" class="calc-result">
    <h3>Reconstitution Instructions</h3>
    <table>
      <tr><td>Solvent Volume Required</td><td id="dil-vol">—</td></tr>
      <tr><td>Final Concentration</td><td id="dil-final">—</td></tr>
      <tr><td>Peptide Amount</td><td id="dil-mass-result">—</td></tr>
    </table>
  </div>
</div>

## How the Calculation Works

<div class="principle-box" markdown="1">

Peptide reconstitution calculations are based on the fundamental relationship between **concentration (C)**, **mass (m)**, and **volume (V)**:

\[ C = \frac{m}{V} \]

- **For mg/mL (mass concentration):** This is the simplest case. If you have 5 mg of peptide and want a 2 mg/mL solution, you need 2.5 mL of solvent. The calculation is a direct proportion — no molecular weight needed.
- **For mM/µM (molar concentration):** To calculate molar concentration, you need the peptide's **molecular weight (MW)**. The formula becomes:
  \[ C_{\text{mM}} = \frac{m}{\text{MW} \times V} \times 1000 \]
  where m is in mg, MW is in Da (g/mol), and V is in mL.
- **Why proper reconstitution matters:** Accurate reconstitution is critical for experimental reproducibility. Errors in solvent volume directly change peptide concentration, leading to inconsistent dosing, failed binding assays, or misleading bioactivity results. Always use calibrated pipettes and account for peptide purity.

</div>

## Core Formula

<div class="formula-box" markdown="1">

#### Mass Concentration (mg/mL)

\[ V(\text{mL}) = \frac{m(\text{mg})}{C(\text{mg/mL})} \]

#### Molar Concentration (mM)

\[ V(\text{mL}) = \frac{m(\text{mg})}{\text{MW} \times C(\text{mM})} \times 1000 \]

#### Variables

| Variable | Description | Typical Units |
|----------|-------------|---------------|
| V | Volume of solvent needed | mL |
| m | Mass of peptide | mg |
| C | Desired concentration | mg/mL or mM |
| MW | Molecular weight of peptide | Da (g/mol) |

</div>

## Worked Example

**Example 1: Mass concentration (mg/mL)**
You have 5 mg of lyophilized peptide and need a 2 mg/mL solution.

\[ V = \frac{5}{2} = 2.5 \text{ mL} \]

Add **2.5 mL** of suitable solvent to your 5 mg peptide vial.

**Example 2: Molar concentration (mM)**
You have 10 mg of a peptide with molecular weight 1000 Da and need a 5 mM solution.

\[ V = \left[\frac{10}{1000 \times 5}\right] \times 1000 = 2 \text{ mL} \]

Add **2 mL** of suitable solvent to your 10 mg peptide vial.

## Common Mistakes

<div class="mistake" markdown="1">

- **Forgetting to account for peptide purity** — Peptide manufacturers quote a purity percentage (e.g., 95%). If you have 5 mg of 80% pure peptide, the effective peptide mass is only 4 mg. Always calculate using the **actual peptide content**: effective mass = total mass × (purity / 100).

- **Using the wrong molecular weight** — Peptide molecular weight is typically given in Da (g/mol) by the manufacturer. Using an incorrect value (e.g., the salt form weight instead of the peptide-only weight) will give an erroneous molar concentration. Check your COA (Certificate of Analysis).

- **Not aliquoting before freezing** — Repeated freeze-thaw cycles degrade peptides and introduce concentration errors. Always aliquot your stock solution into single-use portions before freezing at -20°C or -80°C.

- **Confusing mg/mL with mM** — These are fundamentally different concentration units. 1 mg/mL of a peptide with MW 1000 Da equals 1 mM, but for a peptide with MW 500 Da, 1 mg/mL equals 2 mM. Always verify which unit your protocol requires.

</div>

## Frequently Asked Questions

<div class="faq-q">**Q: What solvent should I use for reconstitution?**</div>

A: The choice of solvent depends on your peptide's hydrophobicity and your downstream application. For hydrophilic peptides, sterile water, PBS, or 0.9% saline often works. For hydrophobic peptides, a small amount of DMSO or acetic acid may be needed. Always check the manufacturer's recommendations on the COA.

<div class="faq-q">**Q: Can I use this calculator for non-peptide compounds?**</div>

A: Yes — the underlying formulas (C = m/V for mass concentration, and the molarity formula for mM/µM) are universal. You can use this calculator for any soluble compound as long as you have its mass, desired concentration, and molecular weight (for molar units).

<div class="faq-q">**Q: How do I account for peptide purity in my dilution?**</div>

A: Divide your peptide mass by the purity fraction before calculating. For example, if you have 5 mg of 80% pure peptide, the effective mass is 5 × 0.80 = 4 mg. Use 4 mg in the calculator. Alternatively, use our [Purity Calculator](purity-calculator/) to adjust your values.

<div class="faq-q">**Q: Why is my peptide not fully dissolving at the calculated volume?**</div>

A: Common reasons include: (1) the peptide is hydrophobic and needs a different solvent, (2) the calculated volume is too small for the peptide to dissolve in (solubility limit), or (3) the peptide has formed aggregates. Try sonicating briefly, warming gently, or adding a small amount of co-solvent.

<div class="faq-q">**Q: Is it better to prepare a stock solution at higher concentration and dilute?**</div>

A: Yes — preparing a concentrated stock (e.g., 10× the final working concentration) and then diluting it for experiments is best practice. This minimizes pipetting errors, reduces freeze-thaw cycles (if aliquoted), and gives you flexibility for different assay conditions.

---

## Common Reconstitution Volumes

| Peptide Mass | Target 1 mg/mL | Target 2 mg/mL | Target 5 mg/mL |
|-------------|---------------|---------------|---------------|
| 1 mg | 1.0 mL | 0.5 mL | 0.2 mL |
| 2 mg | 2.0 mL | 1.0 mL | 0.4 mL |
| 5 mg | 5.0 mL | 2.5 mL | 1.0 mL |
| 10 mg | 10.0 mL | 5.0 mL | 2.0 mL |

---

## Related Tools

- [Molarity Calculator](molarity-calculator/) — Convert between concentration units
- [Purity Calculator](purity-calculator/) — Account for peptide purity in dosing
- [Molecular Weight Calculator](molecular-weight-calculator/) — Calculate peptide molecular weight from sequence
- [Storage Calculator](storage-calculator/) — Storage stability guidelines

<script>
document.getElementById('dil-conc-unit').addEventListener('change', function() {
  document.getElementById('dil-mw-field').style.display = 
    (this.value === 'mm' || this.value === 'um') ? 'block' : 'none';
});

function calcDilution() {
  const mass = parseFloat(document.getElementById('dil-mass').value);
  const massUnit = document.getElementById('dil-mass-unit').value;
  const conc = parseFloat(document.getElementById('dil-conc').value);
  const concUnit = document.getElementById('dil-conc-unit').value;
  const mw = parseFloat(document.getElementById('dil-mw').value);

  if (!mass || !conc) {
    document.getElementById('dil-result').style.display = 'block';
    document.getElementById('dil-vol').textContent = 'Please enter values';
    return;
  }

  // Convert mass to mg
  let massMg = mass;
  if (massUnit === 'ug') massMg = mass / 1000;
  if (massUnit === 'g') massMg = mass * 1000;

  let volML = 0;

  if (concUnit === 'mgml') {
    volML = massMg / conc;
  } else if (concUnit === 'ugml') {
    volML = (massMg * 1000) / conc;
  } else if (concUnit === 'mm') {
    if (!mw) { alert('Please enter molecular weight for molar concentration.'); return; }
    // C (mM) = mass (mg) / (MW * V (L))
    // V (mL) = mass (mg) / (MW * C (mM) / 1000) * 1000
    // V = mass / (MW * C / 1000) * 1000 = mass * 1000 * 1000 / (MW * C) ... let me simplify
    // C (mM) = mass (mg) / (MW (Da) * V (L))
    // V (L) = mass (mg) / (MW * C (mM) / 1000) ... no
    // Actually: V (L) = mass (g) / (MW (g/mol) * C (mol/L))
    // mass (g) = massMg / 1000
    // C (M) = conc / 1000 (mM to M)
    // V (L) = (massMg/1000) / (mw * conc/1000) = massMg / (mw * conc)
    // V (mL) = massMg / (mw * conc) * 1000
    volML = (massMg / (mw * conc)) * 1000;
  } else if (concUnit === 'um') {
    if (!mw) { alert('Please enter molecular weight for molar concentration.'); return; }
    volML = (massMg / (mw * conc / 1000)) * 1000;
  }

  // Format volume
  let volStr = '';
  if (volML >= 1000) {
    volStr = (volML / 1000).toFixed(2) + ' L';
  } else if (volML >= 1) {
    volStr = volML.toFixed(2) + ' mL';
  } else if (volML >= 0.001) {
    volStr = (volML * 1000).toFixed(1) + ' µL';
  } else {
    volStr = volML.toFixed(4) + ' mL';
  }

  // Format concentration for display
  let concDisplay = '';
  if (concUnit === 'mgml') concDisplay = conc + ' mg/mL';
  else if (concUnit === 'ugml') concDisplay = conc + ' µg/mL';
  else if (concUnit === 'mm') concDisplay = conc + ' mM';
  else concDisplay = conc + ' µM';

  document.getElementById('dil-result').style.display = 'block';
  document.getElementById('dil-vol').textContent = volStr;
  document.getElementById('dil-final').textContent = concDisplay;
  document.getElementById('dil-mass-result').textContent = massMg + ' mg';

  document.getElementById('dil-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearDil() {
  document.getElementById('dil-mass').value = '';
  document.getElementById('dil-conc').value = '';
  document.getElementById('dil-mw').value = '1000';
  document.getElementById('dil-result').style.display = 'none';
}
</script>
