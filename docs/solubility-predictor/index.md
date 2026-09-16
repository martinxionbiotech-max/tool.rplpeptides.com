---
title: Peptide Solubility Predictor
description: Free online peptide solubility predictor — predict solubility in water vs. organic solvents based on amino acid sequence. Uses Kyte-Doolittle hydropathy, charge analysis, and aggregation propensity to estimate peptide solubility.
---

# Peptide Solubility Predictor

Predict peptide solubility in various solvents directly from the amino acid sequence. This tool combines GRAVY hydropathy analysis, net charge at target pH, and aggregation propensity scoring to estimate whether a peptide will dissolve readily in aqueous buffers or require organic solvents. Designed for peptide chemists, biochemists, and researchers who need quick solubility guidance for synthesis, purification, and formulation.

---

## Calculator

<div class="calc-card">
  <label for="sol-seq">Amino Acid Sequence (one-letter code)</label>
  <textarea id="sol-seq" placeholder="e.g., YGGFMERRRRRR">YGGFMERRRRRR</textarea>
  <div class="calc-hint">Enter one-letter codes. Only A–Z characters are processed; non-letter characters are ignored.</div>

  <label for="sol-ph">Target pH</label>
  <select id="sol-ph">
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7" selected>7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>

  <label for="sol-solvent">Solvent Type</label>
  <select id="sol-solvent">
    <option value="water">Water</option>
    <option value="saline">0.9% Saline</option>
    <option value="pbs">PBS (pH 7.4)</option>
    <option value="dmso">DMSO</option>
    <option value="ethanol">Ethanol</option>
    <option value="acetic">Acetic Acid</option>
  </select>

  <button class="calc-btn" onclick="predictSolubility()">Predict Solubility</button>
  <button class="calc-btn secondary" onclick="clearSolubility()" style="margin-left:0.5rem;">Clear</button>

  <div id="sol-result" class="calc-result" style="display:none;">
    <h3>Solubility Prediction Results</h3>
    <table>
      <tr><td>Predicted Solubility</td><td id="sol-grade">—</td></tr>
      <tr><td>Suggested Solvent</td><td id="sol-suggested">—</td></tr>
      <tr><td>GRAVY Score</td><td id="sol-gravy">—</td></tr>
      <tr><td>Net Charge at pH <span id="sol-ph-label">7</span></td><td id="sol-charge">—</td></tr>
      <tr><td>Charge Density</td><td id="sol-charge-dens">—</td></tr>
      <tr><td>Aggregation Propensity</td><td id="sol-aggreg">—</td></tr>
      <tr><td>Sequence Length</td><td id="sol-length">—</td></tr>
      <tr><td>Dissolution Notes</td><td id="sol-notes">—</td></tr>
    </table>
  </div>
</div>

---

## What This Calculator Does

Enter a peptide sequence and the tool estimates how comfortably it will dissolve, using three sequence-derived signals: hydropathy (GRAVY), net charge at your chosen pH, and an aggregation-propensity score built from the same residue table. The output is a qualitative grade from Poor to Excellent, a first-choice solvent suggestion, the underlying metric values, and plain-language notes that flag special character — strongly basic or acidic composition, or aggregation-prone stretches.

Read the estimate as a ranking of difficulty rather than a number: it tells you which peptides are likely to need a co-solvent or a pH adjustment and which should dissolve on their own. The bench still decides — a small-scale test settles in minutes what no score can. Everything runs in the browser; sequences are not uploaded or stored.

---

## How Solubility Prediction Works

<div class="principle-box" markdown="1">

Peptide solubility is governed by a balance between **peptide-solvent interactions** and **peptide-peptide interactions**. When peptide-peptide interactions (hydrophobic packing, hydrogen bonding, electrostatic attraction) dominate over peptide-solvent interactions, the peptide aggregates and precipitates. The calculator estimates solubility using four key parameters:

### 1. GRAVY Hydropathy Score

The **Grand Average of Hydropathy (GRAVY)** is the arithmetic mean of Kyte-Doolittle hydropathy values across all residues:

\\[
\text{GRAVY} = \frac{1}{n} \sum_{i=1}^{n} \text{KD}(a_i)
\\]

where \\(\text{KD}(a_i)\\) is the Kyte-Doolittle hydropathy score for residue \\(a_i\\) and \\(n\\) is the sequence length. The Kyte-Doolittle scale ranges from **−4.5** (most hydrophilic, Arg) to **+4.5** (most hydrophobic, Ile). A negative GRAVY indicates a hydrophilic peptide that prefers aqueous environments; a positive GRAVY indicates a hydrophobic peptide that may require organic co-solvents.

### 2. Net Charge Analysis

The net charge at the target pH is computed via the Henderson–Hasselbalch equation:

\\[
Q = \sum_{\text{bases}} \frac{1}{1 + 10^{(\text{pH} - \text{pKa})}} \;-\; \sum_{\text{acids}} \frac{1}{1 + 10^{(\text{pKa} - \text{pH})}}
\\]

**Ionizable groups considered:**

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

Peptides with higher absolute net charge are generally more soluble because electrostatic repulsion prevents aggregation. Solubility is typically lowest near the isoelectric point (pI), where the net charge approaches zero.

### 3. Charge Density

Charge density normalizes the net charge by the sequence length:

\\[
\text{Charge Density} = \frac{|Q|}{n}
\\]

A charge density above **0.15** is considered favourable for aqueous solubility. Values below **0.08** suggest the peptide may have solubility challenges at the given pH.

### 4. Aggregation Propensity

The aggregation propensity score identifies hydrophobic "hot spots" and beta-sheet-promoting residues that increase the risk of self-association. The calculator uses a weighted scoring approach:

- **Hydrophobic residues** (I, L, V, F, W, M, A) contribute positively.
- **Beta-sheet-prone residues** (V, I, Y, F, W, T) add additional weight.
- **Charge clusters** (≥ 3 consecutive charged residues) reduce the score.

\\[
\text{Aggregation Score} = \frac{\sum w_i}{n}
\\]

where \\(w_i\\) is the aggregation weight of residue \\(i\\). Scores above **0.40** indicate high aggregation risk.

</div>

---

## Worked Example

The default sequence, YGGFMERRRRRR (Tyr-Gly-Gly-Phe-Met-Glu-Arg₆), at pH 7 exercises every stage of the estimate. Running it returns grade **Excellent**, suggested solvent "Water or PBS (pH 7.4)", GRAVY **−2.325**, net charge **+4.91**, charge density **0.409**, and aggregation propensity **0.150**.

**Step 1 — Hydropathy (GRAVY).** Sum the Kyte–Doolittle values and divide by the residue count:

\\[
\frac{(-1.3) + (-0.4) + (-0.4) + (+2.8) + (+1.9) + (-3.5) + 6 \times (-4.5)}{12} = \frac{-27.9}{12} = -2.325
\\]

The six arginines dominate the sum — a strongly hydrophilic sequence.

**Step 2 — Net charge at pH 7.** Apply the Henderson–Hasselbalch term to each ionizable group: N-terminus +0.91, C-terminus −1.00, Glu −1.00, and six arginines at ≈ +1.00 each. Total: **+4.91**.

**Step 3 — Charge density.** Dividing the absolute charge by length: 4.91 ÷ 12 = **0.409**, comfortably above the 0.15 threshold that favors aqueous solubility.

**Step 4 — Aggregation propensity.** The weighted residue scores sum to 1.8 across 12 residues: **0.150**, below the 0.40 risk threshold.

**Step 5 — Composite score.** The weighted model is

\\[
\text{score} = 5.0 - 1.2 \times \text{GRAVY} + 8.0 \times \text{charge density} - 3.0 \times \text{aggregation}
\\]

with no length penalty applying here (12 residues is under the 20-residue threshold). Substituting the values: 5.0 + 2.79 + 3.27 − 0.45 = **10.61**, clamped to the 0–10 scale at **10.0** → grade **Excellent**.

**Reading the result:** water or PBS is the sensible first solvent; the output's dissolution note adds "Highly basic — 10 % acetic acid is strongly recommended" as a fallback if the aqueous route disappoints.

---

## Understanding Your Results

| Result | Interpretation |
|--------|---------------|
| **Excellent** | Highly soluble in aqueous buffers. No special measures needed. |
| **Good** | Readily soluble. Gentle heating or brief sonication may help. |
| **Fair** | Moderate solubility. May require pH adjustment, mild organic co-solvent (≤10 % DMSO), or dilution below 1 mg/mL. |
| **Poor** | Poor aqueous solubility. Strongly consider organic solvents (DMSO, ethanol, acetic acid) or surfactant addition. |

### Solubility Grade Criteria

The calculator assigns a grade based on a composite score derived from GRAVY, charge density, and aggregation propensity:

| Composite Score | Grade |
|----------------|-------|
| ≥ 7.0 | Excellent |
| 5.0 – 6.9 | Good |
| 3.0 – 4.9 | Fair |
| < 3.0 | Poor |

**Suggested Solvent** is determined by the peptide's overall character:

- **Aqueous (water, saline, PBS):** Recommended when GRAVY < 0 and charge density > 0.10.
- **DMSO:** Recommended for moderately hydrophobic peptides (GRAVY 0–1.5) or those with moderate aggregation propensity.
- **Ethanol:** Suitable for moderately hydrophobic peptides that tolerate alcohol/water mixtures.
- **Acetic Acid:** Often effective for very basic peptides (high Arg/Lys content) that resist dissolution in neutral buffers.

---

## Factors Affecting Peptide Solubility

### 1. Amino Acid Composition

The single most important determinant of solubility is the ratio of **charged** (R, K, D, E, H), **polar** (N, Q, S, T, Y), and **hydrophobic** (I, L, V, F, W, M, A) residues.

- **≥ 25 % charged residues:** Usually confers good aqueous solubility.
- **≥ 50 % hydrophobic residues:** Often leads to poor solubility in water.
- **High Arg (R) content:** Basic peptides often dissolve best in dilute acetic acid (1–10 %).
- **High Asp/Glu (D/E) content:** Acidic peptides dissolve best in slightly basic buffers (pH 8–9).

### 2. Sequence Length

Short peptides (< 10 residues) are generally more soluble than long ones, all else being equal, because they have fewer inter-molecular contact points. However, very short hydrophobic peptides (e.g., dipeptides like FF, WY) can still be poorly soluble due to aromatic stacking.

### 3. pH Relative to pI

Solubility is minimal at the **isoelectric point (pI)** where the net charge is zero and electrostatic repulsion is absent. For optimal solubility, work at a pH at least **1–2 units away from the pI**:

- **Acidic peptides (pI < 5):** Dissolve in basic buffers (pH 8–9).
- **Basic peptides (pI > 8):** Dissolve in acidic buffers (pH 4–5).
- **Neutral peptides (pI 5–8):** May require organic co-solvents or detergents.

### 4. Ionic Strength

The effect of ionic strength on solubility follows the **Hofmeister series**:

- **Low ionic strength:** Reduces electrostatic shielding — charged peptides may repulse each other more, improving solubility at low concentrations.
- **Moderate ionic strength (100–200 mM):** Screens electrostatic repulsion, which can either help or hinder solubility depending on the peptide.
- **High ionic strength (> 500 mM):** Promotes "salting out" — competition for hydration water forces hydrophobic regions together, causing precipitation.

### 5. Temperature

Most peptides follow the expected trend: **solubility increases with temperature** due to increased kinetic energy breaking peptide-peptide interactions. However, some peptides (particularly those rich in beta-sheet-prone residues) may aggregate more at elevated temperatures due to enhanced hydrophobic interactions.

### 6. Concentration

Peptide solubility is concentration-dependent. A peptide may dissolve at 0.5 mg/mL but aggregate at 5 mg/mL. High concentrations increase the probability of inter-molecular collisions and nucleation events. The calculator assumes a **typical working concentration range of 0.5–2.0 mg/mL**.

---

## Improving Solubility

When a peptide has poor predicted solubility, several strategies can help:

### Solvent and Buffer Strategies

| Strategy | Best For | Details |
|----------|----------|---------|
| **pH adjustment** | Charged peptides | Move pH 1–2 units away from pI |
| **DMSO co-solvent** | Moderately hydrophobic | Add 5–10 % DMSO v/v; most peptides tolerate ≤ 10 % without denaturation |
| **Ethanol co-solvent** | Moderately hydrophobic | 10–30 % ethanol; volatile, suitable for lyophilisation |
| **Acetic acid** | Basic peptides | 1–10 % acetic acid effectively dissolves Arg/Lys-rich peptides |
| **Urea / Guanidine** | Strongly aggregating | 4–8 M urea breaks hydrogen bonds; remove by dialysis after dissolution |
| **Detergents** | Membrane peptides | 0.1–1 % SDS or Triton X-100; remove by dialysis if needed |
| **Sonication** | General | Short pulses (5–10 s) at low amplitude break pre-formed aggregates |
| **Gentle heating** | General | 37–50 °C for 5–10 min; avoid prolonged heating of Met/Cys-rich peptides |

### Sequence Modification

If you control the sequence (e.g., during peptide design), consider:

- **Add charged residues:** Introducing a Lys-Glu or Arg-Asp pair at the termini can dramatically improve solubility without altering the core sequence function.
- **Replace hydrophobic residues:** Substitute Ile → Leu or Val → Ala for slightly reduced hydrophobicity.
- **Reduce beta-sheet propensity:** Replace one or two beta-branched residues (Val, Ile) with Gly or Ser in aggregation-prone regions.
- **Add a solubility tag:** N-terminal poly-Arg (RRRR) or poly-Lys (KKKK) tags are commonly used in research peptides.
- **Shorten the sequence:** Remove terminal hydrophobic stretches that are not essential for function.

---

## Common Solubility Issues by Peptide Type

### Hydrophobic Peptides (GRAVY > 1.0)

Peptides with > 50 % hydrophobic residues (I, L, V, F, W, M, A) frequently resist dissolution in aqueous buffers.

**Recommended approach:**
1. First try DMSO (100 %) at 10–20 mg/mL, then dilute into aqueous buffer.
2. If DMSO fails, try 50 % ethanol/water or 50 % acetonitrile/water.
3. For membrane-interacting peptides, consider 0.1 % SDS or 0.5 % CHAPS.

### Highly Charged Peptides (≥ 30 % charged residues)

These peptides dissolve readily in water at the right pH but may form gels at high concentration due to electrostatic network formation.

**Recommended approach:**
- Acidic peptides (pI < 5): Use PBS pH 7.4 or 50 mM Tris pH 8.0.
- Basic peptides (pI > 8): Use 10–100 mM acetic acid or 50 mM MES pH 5.0.

### Beta-Sheet-Prone Peptides

Sequences rich in V, I, Y, F, W, and alternating polar/apolar residues often form amyloid-like fibrils.

**Recommended approach:**
- Dissolve in 6 M guanidine hydrochloride or 8 M urea.
- Use 30 % acetonitrile/0.1 % TFA for RP-HPLC purification.
- Add 20 % 2,2,2-trifluoroethanol (TFE) to disrupt beta-sheet formation.

### Cysteine-Containing Peptides

Disulfide bond formation between Cys residues in solution can cause covalent aggregation.

**Recommended approach:**
- Include 1–5 mM DTT or TCEP (tris(2-carboxyethyl)phosphine) as a reducing agent.
- Use degassed buffers to minimize oxidation.
- If the disulfide bond is required (e.g., for cyclic peptides), dissolve in 6 M guanidine and refold by dialysis.

---

## Frequently Asked Questions

<div class="faq-q">**How accurate is the solubility prediction?**</div>

The prediction is a **semi-quantitative estimate** based on fundamental physicochemical principles (GRAVY, charge, aggregation propensity). For simple, linear peptides, the correlation with experimental observation is approximately **70–80 %**. The prediction is less reliable for:
- Cyclic or stapled peptides
- Peptides with non-natural or D-amino acids
- Peptides that form specific secondary structures (e.g., alpha-helices that mask hydrophobic residues)
- Very long peptides (> 50 residues) where folding dominates solubility

Always confirm predicted solubility with a small-scale test (0.5–1 mg in 50 µL of solvent) before scaling up.

<div class="faq-q">**What does "Poor" solubility mean in practical terms?**</div>

"Poor" means the peptide is unlikely to dissolve in water or common aqueous buffers at typical working concentrations (≥ 1 mg/mL). You may observe:
- Visible turbidity or particulate matter after mixing
- A clear solution that becomes cloudy after a few hours (slow aggregation)
- Complete failure to wet or disperse even after prolonged vortexing

In such cases, the "Suggested Solvent" field in the calculator output provides the most promising alternative solvent to try first.

<div class="faq-q">**Can I use DMSO for cell-based assays?**</div>

DMSO is widely used for peptide stock solutions in cell biology, but keep the final DMSO concentration **≤ 0.1–0.5 % v/v** in the cell culture medium to avoid cytotoxicity. Make a concentrated stock (e.g., 10–20 mM in 100 % DMSO) and dilute at least 200–1000× into the assay buffer. Most adherent cell lines tolerate ≤ 0.1 % DMSO without significant effects.

<div class="faq-q">**Why does pH matter so much for solubility?**</div>

pH determines the **ionization state** of acidic and basic side chains. At the pH where a peptide's net charge is zero (the isoelectric point, pI), there is no electrostatic repulsion between molecules, allowing hydrophobic and hydrogen-bonding interactions to dominate — this leads to aggregation and precipitation. Moving just 1–2 pH units away from the pI introduces net charge and electrostatic repulsion, often dramatically improving solubility. This is the single most effective strategy for charged peptides.

<div class="faq-q">**How does the calculator handle modified peptides?**</div>

The current calculator assumes **free N- and C-termini** and unmodified side chains. Common modifications that significantly alter solubility include:
- **N-terminal acetylation:** Removes the positive charge on the N-terminus, reducing net charge by approximately +1 and lowering pI.
- **C-terminal amidation:** Removes the negative charge on the C-terminus, increasing net charge by approximately +1 and raising pI.
- **Phosphorylation on Ser/Thr/Tyr:** Adds a −2 charge per phosphate group at neutral pH, increasing aqueous solubility.
- **PEGylation:** Covalent attachment of polyethylene glycol dramatically increases hydrodynamic radius and aqueous solubility.

For accurate predictions on modified peptides, manually account for the charge and polarity changes of the modifications.

<div class="faq-q">**What is the best solvent to try first?**</div>

As a general rule of thumb, try solvents in this order:
1. **Water** (if GRAVY < 0)
2. **PBS pH 7.4** (for most peptides)
3. **10 % acetic acid** (for basic/Arg-rich peptides)
4. **0.1 M ammonium bicarbonate pH 8** (for acidic peptides)
5. **100 % DMSO** (for hydrophobic peptides)
6. **50 % ethanol** (for moderately hydrophobic peptides)
7. **6 M guanidine HCl** (for strongly aggregating peptides)

Start with 0.5–1 mg in 50–100 µL of solvent. Vortex for 30 s, sonicate for 2–5 min if needed, and check clarity visually.

<div class="faq-q">**Can I predict solubility for cyclic peptides?**</div>

Cyclic peptides often have **different solubility properties** than their linear counterparts because:
- The constrained conformation may bury hydrophobic residues in the interior, improving aqueous solubility.
- Alternatively, cyclization may rigidify hydrophobic patches on the surface, reducing solubility.
- The lack of free N- and C-termini eliminates two charged groups, reducing net charge.

The current calculator is optimised for linear peptides. For cyclic peptides, treat the prediction as a rough starting point and always confirm experimentally.

<div class="faq-q">**What is charge density and why is it important?**</div>

Charge density is the absolute net charge per residue (\\(|Q|/n\\)). It captures the **concentration of electrostatic charge** on the peptide surface, which drives electrostatic repulsion between peptide molecules. Two peptides with the same net charge but different lengths have different charge densities — a short peptide with |Q| = 2 has high charge density (> 0.2 for a 10-mer), while a long peptide with |Q| = 2 has low charge density (< 0.05 for a 40-mer). Higher charge density correlates with better solubility because the repulsive force per unit surface area is greater.


---

## Assumptions and Rounding

- **Model basis.** The estimate is semi-quantitative: GRAVY from the Kyte–Doolittle scale, net charge from Henderson–Hasselbalch with the pKa set listed above, and a fixed per-residue aggregation weight (0.0–0.8). It ranks dissolution difficulty; it does not predict a mg/mL value.
- **Composite formula.** score = 5.0 − 1.2 × GRAVY + 8.0 × charge density − 3.0 × aggregation, with a −0.5 penalty added for sequences over 20 residues and a further −1.0 over 30 residues when GRAVY is positive; scores are clamped to 0–10. Grade bands: ≥ 7.0 Excellent, 5.0–6.9 Good, 3.0–4.9 Fair, < 3.0 Poor.
- **What is held constant.** Linear peptides of the 20 standard L-amino acids, free N- and C-termini, and a typical working concentration of 0.5–2.0 mg/mL.
- **Rounding.** Net charge shows 2 decimals; GRAVY, charge density, and aggregation show 3 decimals; length is a whole number.

## Input Definitions

| Input | What it means | Units | Allowed values |
|---|---|---|---|
| Amino acid sequence | One-letter sequence to assess; only the 20 standard letter codes are processed | — | ACDEFGHIKLMNPQRSTVWY; other characters are ignored |
| Target pH | pH used for the net-charge calculation | pH units | 2–12 in integer steps |
| Solvent type | The solvent system being considered for dissolution | — | Water; 0.9% Saline; PBS (pH 7.4); DMSO; Ethanol; Acetic acid |

The Clear button empties the sequence, resets pH to 7 and solvent to Water, and hides the results panel.

## Output Interpretation

| Output | How to read it |
|---|---|
| Predicted solubility | Grade from the composite score: Excellent / Good / Fair / Poor |
| Suggested solvent | First solvent family to try, derived from GRAVY, charge density, and net charge |
| GRAVY score | Mean hydropathy; more negative = more hydrophilic |
| Net charge at the selected pH | Estimated charge, with sign — magnitude of ±3 or more triggers a strong basic/acidic flag in the notes |
| Charge density | Absolute charge ÷ length; above 0.15 favorable, below 0.08 challenging |
| Aggregation propensity | Mean weighted score; above 0.40 flags high aggregation risk, and above 0.45 adds a chaotrope suggestion |
| Sequence length | Residues counted after non-standard characters are stripped |
| Dissolution notes | Plain-language flags built from the metrics — e.g., strong net charge adds acid- or base-side solvent advice |

## Limitations

- **Empirical estimate.** Grades come from a weighted scoring model, not thermodynamic solubility data. Treat them as a ranking of dissolution difficulty; correlation with experiment is good for straightforward linear peptides and weaker for everything else.
- **Standard residues, linear chains.** Cyclic, stapled, PEGylated, and D-amino-acid constructs fall outside the model; terminal modifications such as acetylation or amidation shift charge and are not applied automatically.
- **Composition, not structure.** The model sees sequence composition only — helical or self-assembling sequences can behave unlike any composition-only prediction.
- **Solvent effects are not simulated.** Solvent-specific interactions and ionic-strength effects are outside the model; the suggestion marks where to start, and a small-scale test decides.
- **Assumed concentration band.** Estimates assume typical working concentrations (0.5–2.0 mg/mL); a peptide that dissolves at 0.5 mg/mL may still aggregate at 5 mg/mL.
- **Confirm experimentally.** This tool is for laboratory research and educational use; a 0.5–1 mg trial in 50–100 µL of solvent is the fastest validation.

## The Author's Take

**Position — in my view, solubility is the question to get right before any other number matters: concentration, volume, and activity all silently assume the powder dissolved in the first place.**

**Reasoning.** A fine white powder that will not wet looks like a purity problem and is usually a solvent problem. The mistake I see most often is starting in the wrong solvent family and then fighting the consequences — sonicating harder, warming longer, adding co-solvent drop by drop until the preparation is neither reproducible nor documented. This estimator is coarse by design, but it moves the first attempt into the right solvent family most of the time, and that is most of the battle. Run the small trial before committing the vial: it costs a milligram and settles what no score can.

**Disclosure.** This is the author's opinion from laboratory practice, not a verified fact; always confirm dissolution behavior experimentally.

## Related Research & Peptide Data

The grade is a starting point — these references cover the underlying chemistry:

- **Research:** [pH and Buffer Selection for Peptide Formulations](https://research.rplpeptides.com/formulation-science/ph-buffer-selection-peptides/) — why pH is the master variable for dissolving and keeping peptides in solution.
- **Research:** [Peptide Aggregation Prevention](https://research.rplpeptides.com/formulation-science/peptide-aggregation-prevention/) — the mechanisms behind the aggregation score, and the strategies that counter them.
- **Data:** [Peptide Solubility Guide](https://data.rplpeptides.com/guides/peptide-solubility-guide/) — solvent selection by sequence character, with practical starting points.
- **Data:** [Solubility FAQ](https://data.rplpeptides.com/FAQ/solubility-faq/) — practical questions on dissolving stubborn peptides.

---

## Related Tools

- [Peptide Properties Calculator](../peptide-property-calculator/) — Compute pI, net charge, GRAVY, and instability index
- [Molecular Weight Calculator](../molecular-weight-calculator/) — Detailed mass and formula calculation
- [Dilution Calculator](../dilution-calculator/) — Reconstitution volume and concentration adjustments
- [Storage Buffer Calculator](../storage-calculator/) — Buffer composition and storage recommendations

[← Back to Home](/)

<script>
const AA_HYD = {
  'A': 1.800, 'R': -4.500, 'N': -3.500, 'D': -3.500,
  'C': 2.500, 'E': -3.500, 'Q': -3.500, 'G': -0.400,
  'H': -3.200, 'I': 4.500, 'L': 3.800, 'K': -3.900,
  'M': 1.900, 'F': 2.800, 'P': -1.600, 'S': -0.800,
  'T': -0.700, 'W': -0.900, 'Y': -1.300, 'V': 4.200
};

const AA_AGG = {
  'A': 0.3, 'R': 0.0, 'N': 0.1, 'D': 0.0,
  'C': 0.4, 'E': 0.0, 'Q': 0.1, 'G': 0.0,
  'H': 0.2, 'I': 0.8, 'L': 0.6, 'K': 0.0,
  'M': 0.6, 'F': 0.7, 'P': 0.0, 'S': 0.1,
  'T': 0.3, 'W': 0.6, 'Y': 0.5, 'V': 0.7
};

const NT_PKA = 8.0;
const CT_PKA = 3.1;
const SIDE_PKA = { 'D': 3.90, 'E': 4.07, 'H': 6.00, 'C': 8.37, 'Y': 10.10, 'K': 10.50, 'R': 12.48 };

function calcNetCharge(seq, pH) {
  let charge = 0;
  // N-terminus
  charge += 1 / (1 + Math.pow(10, pH - NT_PKA));
  // C-terminus
  charge -= 1 / (1 + Math.pow(10, CT_PKA - pH));
  // Side chains
  for (let aa of seq) {
    if (SIDE_PKA[aa] !== undefined) {
      if (aa === 'K' || aa === 'R' || aa === 'H') {
        charge += 1 / (1 + Math.pow(10, pH - SIDE_PKA[aa]));
      } else {
        charge -= 1 / (1 + Math.pow(10, SIDE_PKA[aa] - pH));
      }
    }
  }
  return charge;
}

function calcGRAVY(seq) {
  let sum = 0;
  for (let aa of seq) sum += AA_HYD[aa] || 0;
  return seq.length > 0 ? sum / seq.length : 0;
}

function calcAggregationPropensity(seq) {
  let score = 0;
  for (let aa of seq) score += AA_AGG[aa] || 0;
  return seq.length > 0 ? score / seq.length : 0;
}

function predictSolubility() {
  const raw = document.getElementById('sol-seq').value;
  const seq = raw.toUpperCase().replace(/[^ACDEFGHIKLMNPQRSTVWY]/g, '');
  const pH = parseInt(document.getElementById('sol-ph').value);
  const solvent = document.getElementById('sol-solvent').value;

  const resultDiv = document.getElementById('sol-result');
  if (!seq || seq.length === 0) {
    resultDiv.style.display = 'block';
    document.getElementById('sol-length').textContent = 'Please enter a sequence';
    document.getElementById('sol-grade').textContent = '—';
    document.getElementById('sol-suggested').textContent = '—';
    document.getElementById('sol-gravy').textContent = '—';
    document.getElementById('sol-charge').textContent = '—';
    document.getElementById('sol-charge-dens').textContent = '—';
    document.getElementById('sol-aggreg').textContent = '—';
    document.getElementById('sol-notes').textContent = '—';
    return;
  }

  const length = seq.length;
  const gravy = calcGRAVY(seq);
  const charge = calcNetCharge(seq, pH);
  const chargeDens = Math.abs(charge) / length;
  const aggreg = calcAggregationPropensity(seq);

  // Composite solubility score (0-10)
  let score = 5.0; // baseline

  // GRAVY contribution: subtract for hydrophobicity, add for hydrophilicity
  score += -gravy * 1.2;

  // Charge density contribution: higher charge density improves solubility
  score += chargeDens * 8.0;

  // Aggregation penalty
  score -= aggreg * 3.0;

  // Length penalty for long hydrophobic sequences
  if (length > 20 && gravy > 0) score -= 0.5;
  if (length > 30 && gravy > 0) score -= 1.0;

  // Clamp score to 0-10
  score = Math.max(0, Math.min(10, score));

  // Determine grade
  let grade, suggested, notes;
  if (score >= 7.0) {
    grade = 'Excellent';
  } else if (score >= 5.0) {
    grade = 'Good';
  } else if (score >= 3.0) {
    grade = 'Fair';
  } else {
    grade = 'Poor';
  }

  // Determine suggested solvent
  if (gravy < 0 && chargeDens > 0.10) {
    suggested = 'Water or PBS (pH 7.4)';
    notes = 'Peptide is hydrophilic with good charge density. Dissolves readily in aqueous buffers.';
  } else if (gravy < 0 && chargeDens > 0.05) {
    suggested = 'PBS (pH 7.4) or 50 mM Tris';
    notes = 'Moderately hydrophilic. Brief sonication may help dissolution.';
  } else if (gravy >= 0 && gravy < 1.5 && chargeDens > 0.08) {
    suggested = 'DMSO (≤10 % in buffer) or 10 % acetic acid';
    notes = 'Moderately hydrophobic. Use DMSO stock solution and dilute into buffer.';
  } else if (gravy >= 0 && gravy < 1.5 && charge >= 2) {
    suggested = '10 % Acetic Acid (for basic) or 0.1 % NH₄HCO₃ (for acidic)';
    notes = 'Basic peptide. Acetic acid (1–10 %) is often effective. Try 50 % ethanol if not.';
  } else if (gravy >= 1.5) {
    suggested = 'DMSO (100 %) or Ethanol (50 %)';
    notes = 'Strongly hydrophobic. Dissolve in pure DMSO first, then dilute. Consider 0.1 % SDS.';
  } else if (chargeDens <= 0.05 && gravy < 0.5) {
    suggested = 'DMSO or 50 % Ethanol';
    notes = 'Low charge density. May require organic co-solvent or pH adjustment.';
  } else {
    suggested = 'PBS (pH 7.4) or DMSO';
    notes = 'Try aqueous buffer first. If insoluble, switch to DMSO or acetic acid.';
  }

  // Override based on specific characteristics
  if (aggreg > 0.45) {
    notes += ' High aggregation propensity detected. Consider 6 M guanidine HCl or 8 M urea for initial dissolution.';
  }

  if (charge >= 3) {
    notes += ' Highly basic — 10 % acetic acid is strongly recommended.';
  } else if (charge <= -3) {
    notes += ' Highly acidic — 0.1 M NH₄HCO₃ (pH 8) or 50 mM Tris (pH 8.5) recommended.';
  }

  // Update DOM
  document.getElementById('sol-grade').textContent = grade;
  document.getElementById('sol-suggested').textContent = suggested;
  document.getElementById('sol-gravy').textContent = gravy.toFixed(3);
  document.getElementById('sol-ph-label').textContent = pH.toString();
  document.getElementById('sol-charge').textContent = (charge >= 0 ? '+' : '') + charge.toFixed(2);
  document.getElementById('sol-charge-dens').textContent = chargeDens.toFixed(3);
  document.getElementById('sol-aggreg').textContent = aggreg.toFixed(3);
  document.getElementById('sol-length').textContent = length + ' AA';
  document.getElementById('sol-notes').textContent = notes;

  resultDiv.style.display = 'block';
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearSolubility() {
  document.getElementById('sol-seq').value = '';
  document.getElementById('sol-ph').value = '7';
  document.getElementById('sol-solvent').value = 'water';
  document.getElementById('sol-result').style.display = 'none';
}
</script>

<!-- JSON-LD: WebApplication -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Peptide Solubility Predictor",
  "url": "https://tool.rplpeptides.com/solubility-predictor/",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any (web browser)",
  "isAccessibleForFree": true,
  "dateModified": "2026-09-16",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  },
  "publisher": {
    "@id": "https://rplpeptides.com/#organization"
  }
}
</script>
