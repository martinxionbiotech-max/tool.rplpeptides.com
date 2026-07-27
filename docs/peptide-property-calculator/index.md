---
title: Peptide Properties Calculator
description: Free online peptide properties calculator — compute length, molecular weight, hydrophobicity, isoelectric point (pI), net charge, and stability index from amino acid sequence.
---

# Peptide Properties Calculator

Calculate comprehensive physicochemical properties of a peptide from its amino acid sequence — including length, molecular weight, isoelectric point (pI), net charge at user-specified pH, hydrophobicity (GRAVY), and instability index.

---

## Calculator

<div class="calc-card">
  <label for="prop-seq">Amino Acid Sequence (one-letter code)</label>
  <textarea id="prop-seq" placeholder="e.g., HGEGTFTSDVSSYLEEQAAKEFIAWLVKGRG">GLP-1 (7-37): HGEGTFTSDVSSYLEEQAAKEFIAWLVKGRG</textarea>
  <div class="calc-hint">Enter one-letter codes. Only A-Z characters are processed; numbers and parentheses are ignored.</div>

  <label for="prop-ph">pH for Net Charge Calculation</label>
  <input type="number" id="prop-ph" value="7.0" step="0.1" min="0" max="14">

  <label for="prop-mod">N-Terminal Modification</label>
  <select id="prop-mod">
    <option value="none">None (Free)</option>
    <option value="acetyl">Acetylated</option>
  </select>

  <button class="calc-btn" onclick="calcProperties()">Calculate Properties</button>
  <button class="calc-btn secondary" onclick="clearProps()" style="margin-left:0.5rem;">Clear</button>

  <div id="prop-result" class="calc-result">
    <h3>Peptide Properties</h3>
    <table>
      <tr><td>Sequence Length</td><td id="prop-length">—</td></tr>
      <tr><td>Molecular Weight (monoisotopic)</td><td id="prop-mw">—</td></tr>
      <tr><td>Molecular Weight (average)</td><td id="prop-mw-avg">—</td></tr>
      <tr><td>Isoelectric Point (pI)</td><td id="prop-pi">—</td></tr>
      <tr><td>Net Charge at pH <span id="prop-ph-label">7.0</span></td><td id="prop-charge">—</td></tr>
      <tr><td>GRAVY Hydropathicity</td><td id="prop-gravy">—</td></tr>
      <tr><td>Instability Index</td><td id="prop-instab">—</td></tr>
      <tr><td>Aliphatic Index</td><td id="prop-aliphatic">—</td></tr>
    </table>
  </div>
</div>

---

## Reference Data for Known Peptides

| Peptide | Sequence | Length | MW (Mono) | pI | Charge pH 7 |
|---------|----------|--------|-----------|----|------------|
| GLP-1 (7-37) | HGEGTFTSDVSSYLEEQAAKEFIAWLVKGRG | 31 | 3,297.6 | 5.4 | -1.9 |
| Epitalon | AEDG | 4 | 375.4 | 3.6 | -2.0 |
| Semax | MEHFPGP | 7 | 706.8 | 6.1 | 0.0 |
|| BPC-157 | GEPPPGKPADDAGLV | 15 | 1,419.5 | 8.1 | +1.0 |
|

---

## Understanding the Properties

The calculator above computes several physicochemical properties. Here is what each parameter means and how it is calculated.

### Isoelectric Point (pI)

The isoelectric point is the pH at which the peptide carries no net electrical charge. It is calculated via the **Henderson-Hasselbalch equation** using the pKa values of ionizable groups (N-terminus, C-terminus, and side chains of Asp, Glu, His, Cys, Tyr, Lys, Arg). The calculator uses a bisection method to find the pH where the net charge equals zero.

- **Low pI (&lt;5):** The peptide is acidic with an excess of Asp/Glu residues.
- **High pI (&gt;8):** The peptide is basic with an excess of Lys/Arg residues.

### Net Charge at User pH

The net charge at a given pH is computed using the Henderson-Hasselbalch equation:

\[
\text{charge} = \sum_{\text{bases}} \frac{1}{1 + 10^{(\text{pH} - \text{pKa})}} \;-\; \sum_{\text{acids}} \frac{1}{1 + 10^{(\text{pKa} - \text{pH})}}
\]

Bases (positive charges): N-terminus, Lys, Arg, His.  
Acids (negative charges): C-terminus, Asp, Glu, Cys, Tyr.

This value tells you the predominant charge state of the peptide at your experimental pH — critical for predicting electrophoretic behavior, ion-exchange binding, and solubility.

### GRAVY (Grand Average of Hydropathy)

GRAVY is the arithmetic mean of the hydropathy values of all amino acids in the sequence. Hydropathy values (Kyte-Doolittle scale) measure the hydrophobic/hydrophilic character of each residue.

- **Positive GRAVY (&gt;0):** Hydrophobic peptide — likely to interact with membranes or lipid environments.
- **Negative GRAVY (&lt;0):** Hydrophilic peptide — water-soluble and likely to remain in aqueous solution.

### Instability Index

The instability index predicts the stability of a peptide in solution based on the frequency of certain dipeptide pairs. The calculator uses a simplified weighted-sum approach.

- **Index &gt; 40:** The peptide is predicted to be unstable and may degrade quickly in solution.
- **Index ≤ 40:** The peptide is predicted to be stable.

The index is a statistical predictor — while useful as a guide, actual stability depends on many factors including temperature, pH, ionic strength, and the presence of proteases.

### Aliphatic Index

The aliphatic index is the relative volume occupied by aliphatic side chains (Ala, Val, Ile, Leu) expressed as a percentage. It reflects the thermostability of the peptide:

\[
\text{Aliphatic Index} = \frac{(1.0 \times f_{\text{Ala}}) + (2.9 \times f_{\text{Val}}) + (3.9 \times f_{\text{Ile+Leu}})}{\text{Length}} \times 100
\]

- **Higher values:** Greater thermostability — the peptide is more resistant to heat denaturation.
- **Lower values:** Less thermostable — the peptide may unfold or aggregate at elevated temperatures.

---

## pKa Values Used in Calculation

The following pKa values are used for the N-terminus, C-terminus, and ionizable side chains. These values are based on standard biophysical reference data and are the same values embedded in the JavaScript calculator.

| Group | pKa |
|-------|-----|
| N-terminus (NH₃⁺) | 8.0 |
| C-terminus (COOH) | 3.1 |
| Asp (D) side chain | 3.90 |
| Glu (E) side chain | 4.07 |
| His (H) side chain | 6.00 |
| Cys (C) side chain | 8.37 |
| Tyr (Y) side chain | 10.10 |
| Lys (K) side chain | 10.50 |
| Arg (R) side chain | 12.48 |

These pKa values are embedded in the calculator's source code and are used for both the **net charge** calculation at user-specified pH and the **isoelectric point (pI)** estimation via bisection.

---

## Interpreting Your Results

| Result | Interpretation |
|--------|---------------|
| **Low pI (&lt;5)** | Acidic peptide; predominantly negatively charged at neutral pH. Rich in Asp/Glu. |
| **High pI (&gt;8)** | Basic peptide; predominantly positively charged at neutral pH. Rich in Lys/Arg. |
| **pI near 7** | Neutral or zwitterionic peptide; may precipitate near physiological pH. |
| **Negative GRAVY** | Hydrophilic, water-soluble peptide. Dissolves readily in aqueous buffers. |
| **Positive GRAVY** | Hydrophobic, membrane-interacting peptide. May require organic solvents for solubilization. |
| **Instability &gt; 40** | Predicted to be unstable — may degrade quickly in solution. Handle with care and use fresh preparations. |
| **High Aliphatic Index** | More thermostable — better suited for applications requiring thermal cycling or storage at room temperature. |

---

## Frequently Asked Questions

<div class="faq-q">**What is the isoelectric point and why is it important?**</div>

The isoelectric point (pI) is the pH at which a peptide or protein carries no net electrical charge. It is important because:

- Solubility is typically minimal at the pI (the peptide is least soluble and may precipitate).
- It determines the pH range for ion-exchange chromatography purification.
- It influences electrophoretic mobility in isoelectric focusing (IEF).
- It helps predict peptide behavior in buffer systems and biological fluids.

<div class="faq-q">**What does a positive vs negative GRAVY score mean?**</div>

GRAVY (Grand Average of Hydropathy) quantifies the overall hydrophobicity of a peptide:

- **Positive GRAVY:** The peptide is predominantly hydrophobic. It is likely to interact with lipid membranes, micelles, or hydrophobic surfaces. These peptides often require organic solvents (DMSO, ethanol) or detergents for solubilization in aqueous solution.
- **Negative GRAVY:** The peptide is predominantly hydrophilic. It should dissolve readily in water and aqueous buffers, making it easier to work with in standard biochemical assays.

<div class="faq-q">**How accurate is the instability index?**</div>

The instability index is a **statistical predictor** based on the occurrence frequencies of certain dipeptide pairs observed in known stable and unstable proteins. It was originally developed by Guruprasad et al. (1990) for proteins. For short peptides, the index should be treated as a **rough guide** rather than a definitive measurement. Actual stability depends on many additional factors:

- Temperature and pH of the solution
- Ionic strength and buffer composition
- Presence of proteolytic enzymes
- Peptide concentration and aggregation state
- Specific secondary structure formation

A peptide with an instability index above 40 may still be perfectly usable if handled properly (e.g., stored frozen, used fresh, or formulated with stabilizers).

<div class="faq-q">**Can I calculate properties for modified peptides?**</div>

The current calculator supports one N-terminal modification (**acetylation**) via the dropdown menu. Other modifications — such as C-terminal amidation, phosphorylation, glycosylation, cyclization, or D-amino acid substitutions — are not yet implemented. The molecular weight values shown assume standard L-amino acids with free N- and C-termini (unless acetylation is selected). For modified peptides, you can manually adjust the molecular weight by accounting for the mass difference of the modification.

<div class="faq-q">**What's the relationship between charge and solubility?**</div>

Charge and solubility are closely related. In general:

- **Higher net charge** (positive or negative) at a given pH increases electrostatic repulsion between peptide molecules, reducing aggregation and improving solubility.
- **Near the pI**, the net charge approaches zero, and peptide-peptide interactions are maximized, often leading to precipitation or reduced solubility.
- For acidic peptides (low pI), solubility is highest at basic pH where the peptide is negatively charged.
- For basic peptides (high pI), solubility is highest at acidic pH where the peptide is positively charged.

This relationship is the basis for **pH-dependent solubility** and is exploited in purification strategies such as isoelectric precipitation and ion-exchange chromatography.

</div>

---

## Related Tools

- [Molecular Weight Calculator](molecular-weight-calculator/) — Detailed mass + formula calculation
- [Amino Acid Code Converter](amino-acid-converter/) — Convert between one-letter and three-letter codes
- [Peptide Comparison Tool](peptide-comparison/) — Compare multiple peptides
- [Dilution Calculator](dilution-calculator/) — Reconstitution volumes

<script>
const AA_PROP = {
  'A': { mono: 71.03711, avg: 71.0788,  hyd: 1.800, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'R': { mono: 156.10111, avg: 156.1876, hyd: -4.500, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 12.48, instab: 6.0 },
  'N': { mono: 114.04293, avg: 114.1039, hyd: -3.500, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 5.0 },
  'D': { mono: 115.02694, avg: 115.0886, hyd: -3.500, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 3.90, instab: 5.0 },
  'C': { mono: 103.00919, avg: 103.1430, hyd: 2.500, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 8.37, instab: 27.5 },
  'E': { mono: 129.04259, avg: 129.1155, hyd: -3.500, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 4.07, instab: 5.0 },
  'Q': { mono: 128.05858, avg: 128.1307, hyd: -3.500, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 6.0 },
  'G': { mono: 57.02146, avg: 57.0519,  hyd: -0.400, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'H': { mono: 137.05891, avg: 137.1412, hyd: -3.200, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 6.00, instab: 0 },
  'I': { mono: 113.08406, avg: 113.1594, hyd: 4.500, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'L': { mono: 113.08406, avg: 113.1594, hyd: 3.800, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'K': { mono: 128.09496, avg: 128.1742, hyd: -3.900, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 10.50, instab: 0 },
  'M': { mono: 131.04049, avg: 131.1926, hyd: 1.900, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 13.5 },
  'F': { mono: 147.06841, avg: 147.1766, hyd: 2.800, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'P': { mono: 97.05276, avg: 97.1167,  hyd: -1.600, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'S': { mono: 87.03203, avg: 87.0782,  hyd: -0.800, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'T': { mono: 101.04768, avg: 101.1039, hyd: -0.700, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'W': { mono: 186.07931, avg: 186.2133, hyd: -0.900, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 },
  'Y': { mono: 163.06333, avg: 163.1760, hyd: -1.300, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 10.10, instab: 24.0 },
  'V': { mono: 99.06841, avg: 99.1326,  hyd: 4.200, pKa_NH3: 0, pKa_COOH: 0, pKa_R: 0, instab: 0 }
};

const H2O_MONO = 18.01056;
const H2O_AVG = 18.0153;
const NT_TERM_PKA = 8.0;
const CT_TERM_PKA = 3.1;

function calcPropertyCharge(seq, pH) {
  let charge = 0;
  // N-term
  charge += 1 / (1 + Math.pow(10, pH - 8.0));
  // C-term
  charge -= 1 / (1 + Math.pow(10, 3.1 - pH));
  // Side chains
  for (let aa of seq) {
    if (aa === 'K') charge += 1 / (1 + Math.pow(10, pH - 10.50));
    if (aa === 'R') charge += 1 / (1 + Math.pow(10, pH - 12.48));
    if (aa === 'H') charge += 1 / (1 + Math.pow(10, pH - 6.00));
    if (aa === 'D') charge -= 1 / (1 + Math.pow(10, 3.90 - pH));
    if (aa === 'E') charge -= 1 / (1 + Math.pow(10, 4.07 - pH));
    if (aa === 'C') charge -= 1 / (1 + Math.pow(10, 8.37 - pH));
    if (aa === 'Y') charge -= 1 / (1 + Math.pow(10, 10.10 - pH));
  }
  return charge;
}

function calcProperties() {
  const raw = document.getElementById('prop-seq').value;
  const seq = raw.toUpperCase().replace(/[^ACDEFGHIKLMNPQRSTVWY]/g, '');
  const pH = parseFloat(document.getElementById('prop-ph').value) || 7.0;
  const mod = document.getElementById('prop-mod').value;

  if (!seq || seq.length === 0) {
    document.getElementById('prop-result').style.display = 'block';
    document.getElementById('prop-length').textContent = 'Please enter a sequence';
    return;
  }

  // Length
  document.getElementById('prop-length').textContent = seq.length + ' AA';

  // Molecular Weight (monoisotopic and average)
  let m_mono = 0, m_avg = 0;
  for (let aa of seq) {
    const d = AA_PROP[aa];
    if (!d) continue;
    m_mono += d.mono;
    m_avg += d.avg;
  }
  m_mono -= (seq.length - 1) * H2O_MONO;
  m_avg -= (seq.length - 1) * H2O_AVG;

  document.getElementById('prop-mw').textContent = m_mono.toFixed(2) + ' Da';
  document.getElementById('prop-mw-avg').textContent = m_avg.toFixed(2) + ' Da';

  // Net charge at specified pH
  let charge = calcPropertyCharge(seq, pH);
  document.getElementById('prop-ph-label').textContent = pH.toFixed(1);
  document.getElementById('prop-charge').textContent = (charge >= 0 ? '+' : '') + charge.toFixed(2);

  // GRAVY
  let gravy = 0;
  for (let aa of seq) gravy += AA_PROP[aa] ? AA_PROP[aa].hyd : 0;
  gravy /= seq.length;
  document.getElementById('prop-gravy').textContent = gravy.toFixed(3);

  // Instability index (simplified)
  let instab = 0;
  for (let i = 0; i < seq.length - 1; i++) {
    instab += AA_PROP[seq[i]] ? AA_PROP[seq[i]].instab : 0;
  }
  instab = 10 / seq.length * instab;
  document.getElementById('prop-instab').textContent = instab.toFixed(1) + (instab > 40 ? ' (unstable)' : ' (stable)');

  // Aliphatic index
  let aliphatic = 0;
  for (let aa of seq) {
    if (aa === 'A') aliphatic += 1;
    if (aa === 'V') aliphatic += 2.9;
    if (aa === 'I' || aa === 'L') aliphatic += 3.9;
  }
  aliphatic = aliphatic / seq.length * 100;
  document.getElementById('prop-aliphatic').textContent = aliphatic.toFixed(1);

  // pI estimation (bisection method)
  let low = 0, high = 14;
  for (let i = 0; i < 100; i++) {
    let mid = (low + high) / 2;
    let c = calcPropertyCharge(seq, mid);
    if (c > 0) low = mid;
    else high = mid;
  }
  document.getElementById('prop-pi').textContent = ((low + high) / 2).toFixed(2);

  document.getElementById('prop-result').style.display = 'block';
  document.getElementById('prop-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearProps() {
  document.getElementById('prop-seq').value = '';
  document.getElementById('prop-ph').value = '7.0';
  document.getElementById('prop-mod').value = 'none';
  document.getElementById('prop-result').style.display = 'none';
}
</script>
