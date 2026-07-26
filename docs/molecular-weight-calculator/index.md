---
title: Peptide Molecular Weight Calculator
description: Free online peptide molecular weight calculator — calculate monoisotopic and average mass, molecular formula, net charge, and extinction coefficient from amino acid sequence with modification support. Includes acetylation, amidation, disulfide bridges, pyroglutamic acid, and formylation modifications. Explains peptide bond formation, water loss, monoisotopic vs average mass, and step-by-step calculation principles with worked examples. Essential tool for peptide synthesis, mass spectrometry analysis, proteomics research, drug discovery, and biopharmaceutical development.
---

# Peptide Molecular Weight Calculator <span class="tag-popular">MOST POPULAR</span>

Calculate the molecular weight, molecular formula, net charge, and extinction coefficient of a peptide from its amino acid sequence. Supports N-terminal acetylation, C-terminal amidation, and disulfide bridges.

**Keywords:** peptide molecular weight calculator, peptide mass calculator, amino acid sequence calculator, monoisotopic mass, average mass peptide

---

## Calculator

<div class="calc-card">
  <label for="sequence">Amino Acid Sequence (one-letter code)</label>
  <textarea id="sequence" placeholder="e.g., YQVAD or GLP-1(7-37)...">YQVAD</textarea>
  <div class="calc-hint">Enter one-letter amino acid codes. Supports standard 20 amino acids (ACDEFGHIKLMNPQRSTVWY).</div>

  <label for="mod-nterm">N-Terminal Modification</label>
  <select id="mod-nterm">
    <option value="none">None (Free N-terminus)</option>
    <option value="acetyl">Acetylation (+42.01 Da)</option>
    <option value="pyroglu">Pyroglutamic Acid (-17.03 Da)</option>
    <option value="formyl">Formylation (+28.01 Da)</option>
  </select>

  <label for="mod-cterm">C-Terminal Modification</label>
  <select id="mod-cterm">
    <option value="none">None (Free C-terminus)</option>
    <option value="amide">Amidation (-0.98 Da)</option>
  </select>

  <label for="disulfide">Disulfide Bridges</label>
  <select id="disulfide">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <div class="calc-hint">Each disulfide bridge reduces mass by 2.02 Da (loss of 2 H atoms).</div>

  <label for="mass-type">Mass Type</label>
  <select id="mass-type">
    <option value="monoisotopic">Monoisotopic Mass</option>
    <option value="average">Average Mass</option>
  </select>

  <button class="calc-btn" onclick="calcMW()">Calculate Molecular Weight</button>
  <button class="calc-btn secondary" onclick="clearMW()" style="margin-left:0.5rem;">Clear</button>

  <div id="mw-result" class="calc-result">
    <h3>Results</h3>
    <table>
      <tr><td>Molecular Weight</td><td id="res-mw">—</td></tr>
      <tr><td>Molecular Formula</td><td id="res-formula">—</td></tr>
      <tr><td>Net Charge (pH 7)</td><td id="res-charge">—</td></tr>
      <tr><td>Extinction Coefficient (280nm)</td><td id="res-extinction">—</td></tr>
      <tr><td>Sequence Length</td><td id="res-length">—</td></tr>
      <tr><td>Molar Absorptivity</td><td id="res-molar">—</td></tr>
      <tr><td>A260/A280 Ratio</td><td id="res-a260">—</td></tr>
    </table>
  </div>
</div>

---

## How the Calculation Works

### Amino Acid Monoisotopic Masses

| Amino Acid | Code | Monoisotopic Mass (Da) | Average Mass (Da) | Formula Contribution |
|-----------|------|----------------------|-------------------|-------------------|
| Alanine | A | 71.03711 | 71.0788 | C₃H₅NO |
| Arginine | R | 156.10111 | 156.1876 | C₆H₁₂N₄O |
| Asparagine | N | 114.04293 | 114.1039 | C₄H₆N₂O₂ |
| Aspartic Acid | D | 115.02694 | 115.0886 | C₄H₅NO₃ |
| Cysteine | C | 103.00919 | 103.1430 | C₃H₅NOS |
| Glutamic Acid | E | 129.04259 | 129.1155 | C₅H₇NO₃ |
| Glutamine | Q | 128.05858 | 128.1307 | C₅H₈N₂O₂ |
| Glycine | G | 57.02146 | 57.0519 | C₂H₃NO |
| Histidine | H | 137.05891 | 137.1412 | C₆H₇N₃O |
| Isoleucine | I | 113.08406 | 113.1594 | C₆H₁₁NO |
| Leucine | L | 113.08406 | 113.1594 | C₆H₁₁NO |
| Lysine | K | 128.09496 | 128.1742 | C₆H₁₂N₂O |
| Methionine | M | 131.04049 | 131.1926 | C₅H₉NOS |
| Phenylalanine | F | 147.06841 | 147.1766 | C₉H₉NO |
| Proline | P | 97.05276 | 97.1167 | C₅H₇NO |
| Serine | S | 87.03203 | 87.0782 | C₃H₅NO₂ |
| Threonine | T | 101.04768 | 101.1039 | C₄H₇NO₂ |
| Tryptophan | W | 186.07931 | 186.2133 | C₁₁H₁₀N₂O |
| Tyrosine | Y | 163.06333 | 163.1760 | C₉H₉NO₂ |
| Valine | V | 99.06841 | 99.1326 | C₅H₉NO |

### Modifications

| Modification | Mass Change (Da) | Formula Change |
|-------------|-----------------|----------------|
| Acetylation (N-term) | +42.01056 | +C₂H₂O |
| Amidation (C-term) | -0.98474 | -OH + NH₂ |
| Pyroglutamic Acid (N-term) | -17.02655 | -H₂O |
| Formylation (N-term) | +28.01007 | +CO |
| Disulfide Bridge | -2.01565 per bridge | -2H |

### Net Charge Calculation

At pH 7.0, net charge is estimated from ionizable side chains:

- **Positive charges:** Arg (+1), Lys (+1), His (+0.1 at pH 7)
- **Negative charges:** Asp (-1), Glu (-1)
- **N-terminus:** +1 (if unmodified)
- **C-terminus:** -1 (if unmodified; 0 if amidated)

### Extinction Coefficient

Estimated at 280 nm using the Edelhoch method:

- **Trp (W):** 5,500 M⁻¹cm⁻¹
- **Tyr (Y):** 1,490 M⁻¹cm⁻¹
- **Cys (C, disulfide):** 125 M⁻¹cm⁻¹ per bond

---

<div class="principle-box" markdown="1">

### Principles of Peptide Mass Calculation

**Peptide Bond Formation:** Peptides are linear chains of amino acids linked by peptide bonds (amide bonds). Each peptide bond forms through a condensation reaction between the carboxyl group (—COOH) of one amino acid and the amino group (—NH₂) of the next, releasing a water molecule (H₂O).

**Water Loss During Synthesis:** For a peptide containing \(n\) amino acid residues, exactly \(n-1\) water molecules are lost during peptide bond formation. Each water molecule has a mass of **18.01056 Da** (monoisotopic) or **18.0153 Da** (average). This water loss is the single most important correction applied in peptide mass calculation.

**General Relationship:**

\[
\text{MW} = \sum_{i=1}^{n} \text{AA}_i - (n-1) \times \text{H}_2\text{O mass} + \sum \text{modifications}
\]

**Monoisotopic vs. Average Mass:**

| Aspect | Monoisotopic Mass | Average Mass |
|--------|-------------------|--------------|
| Definition | Exact mass of the most abundant isotope of each element (e.g., ¹²C, ¹H, ¹⁴N, ¹⁶O, ³²S) | Weighted average of all naturally occurring isotopes for each element |
| Typical Use | High-resolution mass spectrometry (FT-ICR, Orbitrap, Q-TOF) | Lower-resolution instruments, preparative work, gravimetric calculations |
| Difference Scale | ~0.1–0.5 Da for peptides under 1,500 Da | Larger differences for larger peptides |
| Accuracy | More precise for individual molecular species | Represents bulk isotopic distribution |

Monoisotopic mass is the default for most peptide mass spectrometry applications, while average mass is more commonly used for determining reconstitution volumes and molar concentrations.

</div>

## Example Calculations

| Sequence | Modifications | MW (Monoisotopic) | MW (Average) |
|----------|-------------|-------------------|-------------|
| YQVAD | None | 581.27 Da | 581.62 Da |
| GLP-1(7-37) | None | 3,297.62 Da | 3,299.62 Da |
| GHK | Amidated C-term | 402.20 Da | 402.46 Da |

---

## Core Formula

<div class="formula-box" markdown="1">

**Complete Molecular Weight Formula:**

\[
\text{MW} = \sum_{i=1}^{n} \text{AA}_i - (n-1) \times 18.01056 + \sum \text{modifications} - 2.01565 \times \text{disulfide\_count}
\]

**Where:**

| Variable | Definition |
|----------|------------|
| \(\sum_{i=1}^{n} \text{AA}_i\) | Sum of monoisotopic (or average) masses of all \(n\) amino acid residues in the sequence |
| \(n\) | Total number of amino acids in the peptide |
| \(18.01056\) | Mass of one water molecule (H₂O) in daltons — one H₂O is lost per peptide bond formed |
| \((n-1) \times 18.01056\) | Total water loss from all peptide bond condensation reactions |
| \(\sum \text{modifications}\) | Sum of all modification mass changes (positive for additions like acetylation, negative for losses like amidation) |
| \(2.01565\) | Mass of two hydrogen atoms lost per disulfide bridge |
| \(\text{disulfide\_count}\) | Number of disulfide bridges (each S–S bond replaces two Cys–SH groups, losing 2H) |

**Simplified for unmodified linear peptides:**

\[
\text{MW} = \sum_{i=1}^{n} \text{AA}_i - (n-1) \times 18.01056
\]

</div>

## Worked Example: GHK (Gly-His-Lys)

Let's calculate the molecular weight of the tripeptide **GHK** (Glycine-Histidine-Lysine), a copper-binding peptide found in human plasma.

**Step 1: Sum the amino acid monoisotopic masses**

| Amino Acid | One-Letter Code | Monoisotopic Mass (Da) |
|------------|:---------------:|:----------------------:|
| Glycine | G | 57.02 |
| Histidine | H | 137.06 |
| Lysine | K | 128.09 |
| **Total** | | **322.17 Da** |

**Step 2: Account for water loss from peptide bonds**

GHK has 3 amino acids, therefore \(n-1 = 2\) peptide bonds. Each bond formation releases one H₂O.

\[
\text{Water loss} = 2 \times 18.01056 = 36.02 \text{ Da}
\]

**Step 3: Calculate unmodified molecular weight**

\[
\text{MW} = 322.17 - 36.02 = 286.15 \text{ Da}
\]

**Step 4: Apply modifications (optional)**

| Modification | Calculation | Result |
|-------------|-------------|--------|
| None (free N- and C-termini) | 286.15 | **286.15 Da** |
| C-terminal amidation (−0.98 Da) | 286.15 − 0.98 | **285.17 Da** |
| N-terminal acetylation (+42.01 Da) | 286.15 + 42.01 | **328.16 Da** |
| Acetylation + Amidation | 286.15 + 42.01 − 0.98 | **327.18 Da** |

**Verification:** A mass spectrometer analyzing synthetic GHK (amidated) should show a monoisotopic peak at approximately **285.17 m/z** ([M+H]⁺ at 286.17).

## Frequently Asked Questions

<div class="faq-q">

**What is the difference between monoisotopic and average mass?**

</div>

**Monoisotopic mass** refers to the exact mass of a molecule calculated using the most abundant isotope of each element. For example, carbon is taken as ¹²C (exactly 12.00000 Da), hydrogen as ¹H (1.00783 Da), nitrogen as ¹⁴N (14.00307 Da), and oxygen as ¹⁶O (15.99491 Da). This represents the mass of a single, specific isotopic variant and is what you see in high-resolution mass spectra as the lowest-mass peak of the isotopic envelope.

**Average mass** uses the weighted average of all naturally occurring isotopes for each element. For carbon, this includes ¹²C (98.9%) and ¹³C (1.1%), giving an average atomic mass of 12.0107 Da. The average mass represents the center of the isotopic distribution and is typically 0.1–0.6 Da higher than the monoisotopic mass for most peptides.

**When to use which:** Monoisotopic mass is standard for mass spectrometry and precise analytical work. Average mass is used for calculating molar concentrations, reconstitution volumes, and other bench-scale quantities.

<div class="faq-q">

**How does acetylation affect molecular weight?**

</div>

Acetylation adds an acetyl group (CH₃CO−) to the N-terminus of the peptide, replacing the terminal hydrogen atom. The net mass change is **+42.01 Da** (monoisotopic) or **+42.04 Da** (average). This modification also neutralizes the positive charge of the free N-terminus, which can affect the peptide's overall net charge and isoelectric point. Acetylation is commonly used to improve peptide stability by protecting the N-terminus from enzymatic degradation by aminopeptidases.

<div class="faq-q">

**Why does my peptide's MW differ from the calculated value?**

</div>

Several factors can cause discrepancies between calculated and experimentally observed molecular weights:

- **Isotopic distribution:** Mass spectrometry shows a distribution of isotopic peaks, not a single value. The monoisotopic peak (lowest mass) should match the calculated monoisotopic mass.
- **Salt adducts:** Sodium (Na⁺, +22.99 Da), potassium (K⁺, +38.10 Da), or other counterions from buffers can form adducts.
- **Post-translational modifications:** Phosphorylation (+79.97 Da), glycosylation, oxidation of methionine (+15.99 Da), or other in-vivo modifications may be present.
- **Sequence errors:** A single amino acid substitution or deletion changes the mass significantly.
- **Truncation products:** Incomplete synthesis can produce shorter peptide fragments.
- **Counterions:** Peptides purified as TFA salts or acetate salts carry additional mass from the counterion.

Always confirm your sequence and consider the purification method when interpreting mass spectrometry data.

<div class="faq-q">

**What is the extinction coefficient and why does it matter?**

</div>

The extinction coefficient (ε) is a measure of how strongly a peptide absorbs light at a particular wavelength, typically 280 nm for aromatic amino acids. It is calculated using the **Edelhoch method**:

| Amino Acid | ε₂₈₀ (M⁻¹cm⁻¹) |
|------------|:--------------:|
| Tryptophan (W) | 5,500 |
| Tyrosine (Y) | 1,490 |
| Cystine (C–C, disulfide) | 125 per bond |

The extinction coefficient is essential for:
- **Quantifying peptide concentration** using UV spectrophotometry (A = ε × c × l)
- **Determining yield** after synthesis and purification
- **Normalizing samples** for biochemical assays
- **Quality control** in peptide manufacturing

Peptides lacking Trp, Tyr, and disulfide bonds have negligible absorbance at 280 nm and require alternative quantification methods (e.g., BCA assay, tryptophan fluorescence at 295 nm).

<div class="faq-q">

**How do disulfide bridges affect mass calculation?**

</div>

A disulfide bridge (cystine bond) forms between the thiol groups (—SH) of two cysteine residues. During formation, each cysteine loses one hydrogen atom, and the two hydrogens combine and are released. This means each disulfide bridge reduces the molecular weight by **2.01565 Da** (the mass of two hydrogen atoms).

The formula impact is straightforward:

\[
\text{MW}_{\text{with disulfide}} = \text{MW}_{\text{linear}} - (2.01565 \times \text{disulfide\_count})
\]

Disulfide bridges also:
- Introduce structural constraints that affect peptide folding and bioactivity
- Contribute to UV absorbance at 280 nm (125 M⁻¹cm⁻¹ per bond)
- Protect peptides from proteolytic degradation
- Are critical for the stability of many therapeutic peptides (e.g., insulin, oxytocin)

## When to Use This Tool

The Peptide Molecular Weight Calculator is essential for a wide range of research and development applications:

- **Peptide Synthesis:** Verify the mass of synthesized peptides before and after purification. Calculate expected [M+H]⁺ peaks for HPLC-MS and LC-MS quality control.
- **Mass Spectrometry:** Predict monoisotopic and average masses for database searching, spectral interpretation, and fragment ion analysis in proteomics workflows.
- **Drug Discovery:** Design therapeutic peptides with precise molecular weights. Calculate masses for modified peptides including acetylated, amidated, and cyclized variants.
- **Biopharmaceutical Development:** Determine molar extinction coefficients for accurate quantification of peptide-based drug substances and drug products.
- **Reconstitution and Dosing:** Use calculated molecular weights alongside the [Dilution Calculator](dilution-calculator/) and [Molarity Calculator](molarity-calculator/) to prepare precise stock solutions and dosing formulations.
- **Characterization of Natural Peptides:** Analyze bioactive peptides from venoms, hormones, growth factors, and antimicrobial peptides by comparing calculated masses against observed MS data.
- **Education and Training:** Teach students the fundamental principles of peptide chemistry, including condensation reactions, water loss, and the impact of post-translational modifications on mass.

For comprehensive physicochemical characterization including isoelectric point, hydrophobicity, and instability index, visit the [Peptide Properties Calculator](peptide-property-calculator/).

---

## Related Tools

- [Peptide Properties Calculator](peptide-property-calculator/) — Full physicochemical characterization
- [Dilution Calculator](dilution-calculator/) — Calculate reconstitution volumes
- [Molarity Calculator](molarity-calculator/) — Convert between concentration units
- [Peptide Comparison Tool](peptide-comparison/) — Compare multiple peptides side-by-side

---

*Data source: IUPAC-IUBMB biochemical nomenclature. Calculations follow ExPASy ProtParam methodology.*

<script>
const AA_DATA = {
  'A': { mono: 71.03711, avg: 71.0788,  formula: {C:3, H:5, N:1, O:1, S:0}, charge: 0, e280: 0 },
  'R': { mono: 156.10111, avg: 156.1876, formula: {C:6, H:12, N:4, O:1, S:0}, charge: 1, e280: 0 },
  'N': { mono: 114.04293, avg: 114.1039, formula: {C:4, H:6, N:2, O:2, S:0}, charge: 0, e280: 0 },
  'D': { mono: 115.02694, avg: 115.0886, formula: {C:4, H:5, N:1, O:3, S:0}, charge: -1, e280: 0 },
  'C': { mono: 103.00919, avg: 103.1430, formula: {C:3, H:5, N:1, O:1, S:1}, charge: 0, e280: 125 },
  'E': { mono: 129.04259, avg: 129.1155, formula: {C:5, H:7, N:1, O:3, S:0}, charge: -1, e280: 0 },
  'Q': { mono: 128.05858, avg: 128.1307, formula: {C:5, H:8, N:2, O:2, S:0}, charge: 0, e280: 0 },
  'G': { mono: 57.02146, avg: 57.0519,  formula: {C:2, H:3, N:1, O:1, S:0}, charge: 0, e280: 0 },
  'H': { mono: 137.05891, avg: 137.1412, formula: {C:6, H:7, N:3, O:1, S:0}, charge: 0.1, e280: 0 },
  'I': { mono: 113.08406, avg: 113.1594, formula: {C:6, H:11, N:1, O:1, S:0}, charge: 0, e280: 0 },
  'L': { mono: 113.08406, avg: 113.1594, formula: {C:6, H:11, N:1, O:1, S:0}, charge: 0, e280: 0 },
  'K': { mono: 128.09496, avg: 128.1742, formula: {C:6, H:12, N:2, O:1, S:0}, charge: 1, e280: 0 },
  'M': { mono: 131.04049, avg: 131.1926, formula: {C:5, H:9, N:1, O:1, S:1}, charge: 0, e280: 0 },
  'F': { mono: 147.06841, avg: 147.1766, formula: {C:9, H:9, N:1, O:1, S:0}, charge: 0, e280: 0 },
  'P': { mono: 97.05276, avg: 97.1167,  formula: {C:5, H:7, N:1, O:1, S:0}, charge: 0, e280: 0 },
  'S': { mono: 87.03203, avg: 87.0782,  formula: {C:3, H:5, N:1, O:2, S:0}, charge: 0, e280: 0 },
  'T': { mono: 101.04768, avg: 101.1039, formula: {C:4, H:7, N:1, O:2, S:0}, charge: 0, e280: 0 },
  'W': { mono: 186.07931, avg: 186.2133, formula: {C:11, H:10, N:2, O:1, S:0}, charge: 0, e280: 5500 },
  'Y': { mono: 163.06333, avg: 163.1760, formula: {C:9, H:9, N:1, O:2, S:0}, charge: 0, e280: 1490 },
  'V': { mono: 99.06841, avg: 99.1326,  formula: {C:5, H:9, N:1, O:1, S:0}, charge: 0, e280: 0 }
};

// Water mass (H2O) = 18.01056 mono, 18.0153 avg
const H2O_MONO = 18.01056;
const H2O_AVG = 18.0153;

function parseSequence(seq) {
  seq = seq.toUpperCase().replace(/\s+/g, '').replace(/[^ACDEFGHIKLMNPQRSTVWY]/g, '');
  return seq;
}

function getModData(mod, type) {
  if (type === 'nterm') {
    if (mod === 'acetyl') return { mono: 42.01056, avg: 42.0373, formula: {C:2, H:2, O:1, N:0, S:0}, charge: -1 };
    if (mod === 'pyroglu') return { mono: -17.02655, avg: -17.0078, formula: {C:0, H:-2, O:-1, N:0, S:0}, charge: -1 };
    if (mod === 'formyl') return { mono: 28.01007, avg: 28.0101, formula: {C:1, H:0, O:1, N:0, S:0}, charge: -1 };
  }
  if (type === 'cterm') {
    if (mod === 'amide') return { mono: -0.98474, avg: -0.9847, formula: {C:0, H:-1, N:1, O:-1, S:0}, charge: 1 };
  }
  return { mono: 0, avg: 0, formula: {C:0, H:0, N:0, O:0, S:0}, charge: 0 };
}

function calcMW() {
  const seqRaw = document.getElementById('sequence').value;
  const seq = parseSequence(seqRaw);
  if (!seq || seq.length === 0) {
    document.getElementById('mw-result').style.display = 'block';
    document.getElementById('res-mw').textContent = 'Please enter a valid sequence';
    document.getElementById('res-formula').textContent = '—';
    document.getElementById('res-charge').textContent = '—';
    document.getElementById('res-extinction').textContent = '—';
    document.getElementById('res-length').textContent = '—';
    document.getElementById('res-molar').textContent = '—';
    document.getElementById('res-a260').textContent = '—';
    return;
  }

  const massType = document.getElementById('mass-type').value;
  const nMod = document.getElementById('mod-nterm').value;
  const cMod = document.getElementById('mod-cterm').value;
  const disulfide = parseInt(document.getElementById('disulfide').value) || 0;
  const isMono = massType === 'monoisotopic';

  let totalMass = 0;
  let totalFormula = {C:0, H:0, N:0, O:0, S:0};
  let totalCharge = 0;
  let e280 = 0;
  let wCount = 0, yCount = 0;

  for (let aa of seq) {
    const d = AA_DATA[aa];
    if (!d) continue;
    totalMass += isMono ? d.mono : d.avg;
    for (let k in d.formula) totalFormula[k] += d.formula[k];
    totalCharge += d.charge;
    e280 += d.e280;
    if (aa === 'W') wCount++;
    if (aa === 'Y') yCount++;
  }

  // Subtract water per peptide bond
  const h2oMass = isMono ? H2O_MONO : H2O_AVG;
  totalMass -= (seq.length - 1) * h2oMass;
  totalFormula.H -= (seq.length - 1) * 2;
  totalFormula.O -= (seq.length - 1);
  if (seq.length > 0) { totalFormula.H -= 2; totalFormula.O -= 1; } // N-term H, C-term OH

  // N-terminal modification
  if (nMod !== 'none') {
    const mod = getModData(nMod, 'nterm');
    totalMass += isMono ? mod.mono : mod.avg;
    for (let k in mod.formula) totalFormula[k] += mod.formula[k];
    totalCharge += mod.charge;
  } else {
    totalCharge += 1; // free N-term adds +1
  }

  // C-terminal modification
  if (cMod !== 'none') {
    const mod = getModData(cMod, 'cterm');
    totalMass += isMono ? mod.mono : mod.avg;
    for (let k in mod.formula) totalFormula[k] += mod.formula[k];
    totalCharge += mod.charge;
  } else {
    totalCharge -= 1; // free C-term adds -1
  }

  // Disulfide bridges
  if (disulfide > 0) {
    totalMass -= disulfide * 2.01565;
    totalFormula.H -= disulfide * 2;
  }

  // Build formula string
  const formulaStr = `C${totalFormula.C}H${totalFormula.H}N${totalFormula.N}O${totalFormula.O}` + 
    (totalFormula.S > 0 ? `S${totalFormula.S}` : '');

  // Charge string
  let chargeStr = '';
  if (totalCharge > 0) chargeStr = '+' + Math.round(totalCharge * 10) / 10;
  else if (totalCharge < 0) chargeStr = '' + Math.round(totalCharge * 10) / 10;
  else chargeStr = '0';

  // Extinction coefficient with disulfide correction
  let e280_corrected = e280 + (disulfide * 125);

  // Absorbance ratio estimate
  let a260_280 = (wCount * 5.6 + yCount * 1.0) / (wCount * 5.5 + yCount * 1.49) || '—';
  if (a260_280 !== '—') a260_280 = a260_280.toFixed(2);

  // Display
  document.getElementById('mw-result').style.display = 'block';
  document.getElementById('res-mw').textContent = totalMass.toFixed(2) + ' Da' + (isMono ? ' (monoisotopic)' : ' (average)');
  document.getElementById('res-formula').textContent = formulaStr;
  document.getElementById('res-charge').textContent = chargeStr;
  document.getElementById('res-extinction').textContent = e280_corrected > 0 ? e280_corrected + ' M⁻¹cm⁻¹' : '0 (no Trp/Tyr/Cys-C)';
  document.getElementById('res-length').textContent = seq.length + ' amino acids';
  document.getElementById('res-molar').textContent = e280_corrected > 0 ? (e280_corrected / totalMass * 10).toFixed(1) + ' L·g⁻¹·cm⁻¹' : '—';
  document.getElementById('res-a260').textContent = a260_280;

  // Scroll to results
  document.getElementById('mw-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearMW() {
  document.getElementById('sequence').value = '';
  document.getElementById('mod-nterm').value = 'none';
  document.getElementById('mod-cterm').value = 'none';
  document.getElementById('disulfide').value = '0';
  document.getElementById('mass-type').value = 'monoisotopic';
  document.getElementById('mw-result').style.display = 'none';
}
</script>
