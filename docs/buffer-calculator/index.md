---
title: Buffer Preparation Calculator
description: Free online buffer preparation calculator — calculate buffer components for common laboratory buffers including PBS, Tris-HCl, HEPES, acetate, citrate, and phosphate buffers. Calculates mass of buffer components needed.
---

# Buffer Preparation Calculator

Easily calculate the exact masses and volumes of components needed to prepare common laboratory buffers. Select your buffer type, enter the target concentration, volume, and pH, and the calculator provides a complete recipe with precise amounts of each reagent.

**Keywords:** buffer calculator, PBS buffer preparation, Tris buffer, HEPES buffer, acetate buffer, citrate buffer, phosphate buffer, Henderson-Hasselbalch, buffer recipe

---

## Calculator

<div class="calc-card">
  <h3 style="margin-top:0;">Buffer Recipe Calculator</h3>

  <label for="buf-type">Buffer Type</label>
  <select id="buf-type" onchange="updateBufferOptions()">
    <option value="pbs">PBS (Phosphate-Buffered Saline)</option>
    <option value="tris">Tris-HCl</option>
    <option value="hepes">HEPES</option>
    <option value="acetate">Acetate Buffer</option>
    <option value="citrate">Citrate Buffer</option>
    <option value="phosphate">Phosphate Buffer</option>
  </select>

  <label for="buf-conc">Target Concentration (mM)</label>
  <input type="number" id="buf-conc" value="50" step="1" min="1" max="1000">

  <label for="buf-vol">Target Volume (mL)</label>
  <input type="number" id="buf-vol" value="500" step="10" min="1" max="10000">

  <div id="buf-ph-field">
    <label for="buf-ph">Target pH</label>
    <input type="number" id="buf-ph" value="7.4" step="0.01" min="0" max="14">
    <small id="buf-ph-range" style="display:block;color:#888;margin-top:4px;">Recommended range: 5.5–8.0</small>
  </div>

  <div id="buf-nacl-field" style="display:none;">
    <label for="buf-nacl">NaCl Concentration (mM) — for PBS</label>
    <input type="number" id="buf-nacl" value="137" step="1" min="0">
  </div>

  <button class="calc-btn" onclick="calcBuffer()">Calculate Buffer Recipe</button>
  <button class="calc-btn secondary" onclick="clearBuffer()" style="margin-left:0.5rem;">Clear</button>

  <div id="buf-result" class="calc-result" style="display:none;">
    <h3>Buffer Recipe</h3>
    <p id="buf-summary" style="font-weight:bold;"></p>
    <table id="buf-components-table">
      <thead>
        <tr><th>Component</th><th>Molecular Weight (g/mol)</th><th>Amount Needed</th><th>Unit</th></tr>
      </thead>
      <tbody id="buf-components-body"></tbody>
    </table>
    <div id="buf-instructions" style="margin-top:1rem;padding:1rem;background:#f8f9fa;border-radius:8px;"></div>
  </div>
</div>

## How Buffer Calculations Work

A buffer is a solution that resists changes in pH when small amounts of acid or base are added. Buffers consist of a weak acid (HA) and its conjugate base (A⁻). The ability of a buffer to maintain pH is governed by the **Henderson–Hasselbalch equation**:

\\[ \text{pH} = \text{p}K_a + \log_{10} \frac{[\text{A}^-]}{[\text{HA}]} \\]

This equation is the foundation of buffer preparation. To prepare a buffer at a target pH, we use the known pKₐ of the weak acid to determine the required ratio of conjugate base to acid:

\\[ \frac{[\text{A}^-]}{[\text{HA}]} = 10^{(\text{pH} - \text{p}K_a)} \\]

Once the ratio is known, we calculate the individual concentrations of the acid and base forms that together sum to the total buffer concentration:

\\[ [\text{HA}] = \frac{C_{\text{total}}}{1 + 10^{(\text{pH} - \text{p}K_a)}} \\]
\\[ [\text{A}^-] = C_{\text{total}} - [\text{HA}] \\]

Where \\(C_{\text{total}}\\) is the total buffer concentration (the sum of both forms). For buffers with multiple relevant pKₐ values (e.g., phosphate with pKₐ₁ = 2.14, pKₐ₂ = 7.21, pKₐ₃ = 12.67), the dominant equilibrium near the target pH is used.

### Important Considerations

- **pKₐ is temperature-dependent:** The pKₐ of Tris changes by approximately –0.028 units per °C. A Tris buffer prepared at 25°C will have a different pH at 4°C or 37°C.
- **Ionic strength affects buffer capacity:** Higher buffer concentrations provide greater buffering capacity but also increase ionic strength, which may affect biological systems.
- **Dilution effects:** When preparing concentrated stock buffers, remember that diluting to working concentration may slightly alter the pH.

## Common Laboratory Buffers

The table below summarizes the buffers supported by this calculator, their pKₐ values, useful pH ranges, and typical components.

| Buffer | pKₐ (25°C) | Useful pH Range | Components | Typical Use |
|--------|-----------|----------------|------------|-------------|
| **PBS** | 7.21 (phosphate) | 7.2–7.6 | NaCl, KCl, Na₂HPO₄, KH₂PO₄ | Cell culture, immunohistochemistry, ELISA |
| **Tris-HCl** | 8.07 | 7.0–9.0 | Tris base, HCl | DNA/RNA electrophoresis, biochemical assays |
| **HEPES** | 7.55 | 6.8–8.2 | HEPES free acid, NaOH | Cell culture (CO₂-independent), enzyme assays |
| **Acetate** | 4.76 | 3.5–5.5 | Sodium acetate, acetic acid | DNA extraction, protein purification, HPLC |
| **Citrate** | 3.13, 4.76, 6.40 | 3.0–6.5 | Citric acid, sodium citrate | Anticoagulant, antigen retrieval, ELISA |
| **Phosphate** | 2.14, 7.21, 12.67 | 5.5–8.0 | NaH₂PO₄, Na₂HPO₄ | General biochemical buffers, protein purification |

### Buffer Selection Guidelines

Choosing the right buffer for your experiment depends on several factors:

1. **Target pH:** Select a buffer whose pKₐ is within ±1 pH unit of your target pH. Buffering capacity is maximal when pH = pKₐ.
2. **Temperature sensitivity:** Tris buffers change significantly with temperature. For temperature-sensitive experiments, consider HEPES or phosphate buffers.
3. **Biological compatibility:** Some buffers interfere with specific assays. Phosphate can precipitate calcium and magnesium ions. Tris contains a primary amine that can interfere with protein assays (e.g., Bradford, BCA).
4. **Metal ion interactions:** Phosphate buffers can chelate divalent cations. Citrate is a strong chelator of calcium ions.
5. **UV absorbance:** Tris and HEPES have minimal absorbance at 280 nm, making them suitable for protein UV spectroscopy. Acetate absorbs strongly below 230 nm.

## Step-by-Step Examples

### Example 1: 10× PBS Buffer (1 L, pH 7.4)

Phosphate-buffered saline is the most widely used buffer in biological research. A 10× concentrate is typically prepared and diluted to 1× before use.

**Given:** Target 10× PBS, 1 L total volume, pH 7.4

**Step 1 — Calculate the phosphate ratio using Henderson–Hasselbalch:**

\\[ \frac{[\text{HPO}_4^{2-}]}{[\text{H}_2\text{PO}_4^-]} = 10^{(7.4 - 7.21)} = 10^{0.19} = 1.55 \\]

**Step 2 — Determine component concentrations:**
- Total phosphate concentration = 10× 10 mM = 100 mM
- [H₂PO₄⁻] = 100 / (1 + 1.55) = 39.2 mM
- [HPO₄²⁻] = 100 – 39.2 = 60.8 mM

**Step 3 — Calculate masses for 1 L:**
- **NaCl:** 1370 mM → 1370 × 10⁻³ mol/L × 58.44 g/mol × 1 L = **80.1 g**
- **KCl:** 27 mM → 27 × 10⁻³ × 74.55 × 1 = **2.01 g**
- **Na₂HPO₄:** 60.8 mM → 60.8 × 10⁻³ × 141.96 × 1 = **8.63 g** (anhydrous)
- **KH₂PO₄:** 39.2 mM → 39.2 × 10⁻³ × 136.09 × 1 = **5.33 g**

**Step 4 — Preparation:** Dissolve the salts in ~800 mL of ultrapure water, adjust pH to 7.4 with HCl or NaOH if necessary, and bring to 1 L final volume. Filter sterilize for cell culture use.

### Example 2: 1 M Tris-HCl Buffer (500 mL, pH 8.0)

Tris buffer at 1 M is a common stock solution for electrophoresis and biochemical assays.

**Given:** 1 M Tris-HCl, 500 mL, pH 8.0

**Step 1 — Calculate mass of Tris base:**
\\[ m = C \times \text{MW} \times V = 1.0 \times 121.14 \times 0.5 = 60.57 \text{ g} \\]

**Step 2 — Calculate HCl volume for pH adjustment:**
At pH 8.0, the ratio of Tris·H⁺ (conjugate acid) to Tris (base) is:
\\[ \frac{[\text{Tris·H}^+]}{[\text{Tris}]} = 10^{(8.07 - 8.0)} = 10^{0.07} = 1.17 \\]

Fraction protonated = 1.17 / (1 + 1.17) = 0.539
HCl needed = 0.539 × 1.0 M × 0.5 L = 0.27 moles

Using 6 M HCl: 0.27 mol / 6 M = **0.045 L = 45 mL**

> **Note:** In practice, you add concentrated HCl dropwise while monitoring pH until the target is reached. The calculated value serves as an estimate of the volume needed.

**Step 3 — Preparation:** Dissolve 60.57 g Tris base in ~400 mL water, slowly add ~45 mL of 6 M HCl while stirring, adjust to pH 8.0, bring to 500 mL final volume.

### Example 3: 0.2 M Phosphate Buffer (1 L, pH 6.8)

Phosphate buffer at pH 6.8 is commonly used for protein chromatography and enzymatic assays.

**Given:** 0.2 M sodium phosphate buffer, 1 L, pH 6.8

**Step 1 — Calculate ratio:**
\\[ \frac{[\text{HPO}_4^{2-}]}{[\text{H}_2\text{PO}_4^-]} = 10^{(6.8 - 7.21)} = 10^{-0.41} = 0.389 \\]

**Step 2 — Component concentrations:**
- Total phosphate = 0.2 M = 200 mM
- [H₂PO₄⁻] = 200 / (1 + 0.389) = 144 mM
- [HPO₄²⁻] = 200 – 144 = 56 mM

**Step 3 — Calculate masses:**
- **NaH₂PO₄·H₂O** (MW = 137.99): 0.144 mol/L × 137.99 g/mol × 1 L = **19.87 g**
- **Na₂HPO₄** (anhydrous, MW = 141.96): 0.056 mol/L × 141.96 g/mol × 1 L = **7.95 g**

**Step 4 — Preparation:** Dissolve both salts in ~900 mL water, adjust pH to 6.8, bring to 1 L.

## Buffer Preparation Best Practices

### General Protocol

1. **Use high-quality water:** Always use ultrapure deionized water (≥18.2 MΩ·cm) for buffer preparation. Impurities can alter pH, introduce contaminants, and interfere with downstream applications.

2. **Weigh accurately:** Use a calibrated analytical balance. For precision, account for the hydration state of salts (e.g., Na₂HPO₄·7H₂O vs. anhydrous). The molecular weight used in calculation must match the form of the chemical being weighed.

3. **Dissolve completely:** Add the weighed components to approximately 80% of the final volume of water. Stir or sonicate until fully dissolved before adjusting pH.

4. **Calibrate the pH meter:** Always calibrate your pH meter with fresh standards (typically pH 4.0, 7.0, and 10.0) at the same temperature at which the buffer will be used. Allow the reading to stabilize before recording.

5. **Adjust pH carefully:** Add acid (HCl) or base (NaOH) dropwise while stirring. For fine adjustments near the target pH, use dilute solutions (e.g., 0.1 M or 1 M rather than concentrated stocks). Avoid overshooting — if you pass the target pH, it is better to discard and start over than to "back-titrate," as this introduces excess ions.

6. **Bring to final volume:** After pH adjustment, transfer the solution to a volumetric flask and bring to the final volume with water. Mix thoroughly by inverting.

7. **Filter and store:** Filter through a 0.22 µm or 0.45 µm filter for long-term storage or cell culture use. Store buffers at the appropriate temperature (room temperature, 4°C, or frozen) in tightly sealed containers. Label with buffer type, concentration, pH, date, and preparer initials.

### Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Using wrong salt form (e.g., anhydrous vs. heptahydrate) | Incorrect concentration | Verify MW on the reagent bottle matches the form used |
| Adjusting pH before dissolving all components | Inaccurate final pH | Dissolve all solutes first, then adjust pH |
| pH meter not calibrated or temperature-compensated | Wrong pH reading | Calibrate daily; use automatic temperature compensation |
| Adding too much strong acid/base (overshooting) | Excess ionic strength, altered buffer properties | Use dilute acid/base near target pH; never back-titrate |
| Not accounting for temperature effects | pH drift at experimental temperature | Prepare or verify pH at the working temperature |
| Storing buffers inappropriately | Microbial growth, pH drift | Filter sterilize; store at 4°C; discard after 1 month |
| Using metal spatulas with Tris or phosphate buffers | Contamination | Use plastic spatulas for buffer salts |

### Temperature Dependence of Common Buffers

Temperature changes affect buffer pH differently depending on the buffer system:

| Buffer | dpH/dT (units/°C) | pH at 4°C | pH at 25°C | pH at 37°C |
|--------|-------------------|-----------|------------|------------|
| Tris-HCl | –0.028 | 8.58 | 8.07 | 7.73 |
| HEPES | –0.014 | 7.90 | 7.55 | 7.33 |
| Phosphate | –0.003 | 7.25 | 7.21 | 7.18 |
| Acetate | +0.0002 | 4.76 | 4.76 | 4.76 |
| PBS | –0.003 | 7.44 | 7.40 | 7.37 |

Tris buffers are particularly sensitive to temperature. A Tris buffer prepared at room temperature (pH 8.0) will have a pH of approximately 8.6 at 4°C and 7.7 at 37°C. Always verify the pH at the temperature of your experiment.

## Frequently Asked Questions

<details>
  <summary><strong>What is the Henderson–Hasselbalch equation and how is it used for buffers?</strong></summary>
  <p>The Henderson–Hasselbalch equation is the mathematical foundation of buffer preparation:</p>
  <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
    pH = pKₐ + log([A⁻]/[HA])
  </p>
  <p>It relates the pH of a buffer solution to the pKₐ of the weak acid and the ratio of its conjugate base to its conjugate acid. To prepare a buffer at a specific pH, you:</p>
  <ol>
    <li>Determine the pKₐ of the buffer system closest to your target pH</li>
    <li>Calculate the required ratio [A⁻]/[HA] = 10^(pH – pKₐ)</li>
    <li>Distribute the total buffer concentration between the acid and base forms according to this ratio</li>
  </ol>
  <p>The equation assumes ideal behavior and is most accurate when the concentrations of the acid and base forms are within roughly an order of magnitude of each other (i.e., pH within ±1 unit of pKₐ).</p>
</details>

<details>
  <summary><strong>What is buffering capacity and how do I maximize it?</strong></summary>
  <p><strong>Buffering capacity (β)</strong> is a measure of a buffer's ability to resist pH change upon addition of acid or base. It is defined as:</p>
  <p style="text-align:center;font-family:monospace;font-size:1.05rem;">
    β = d[C<sub>b</sub>] / dpH = –d[C<sub>a</sub>] / dpH
  </p>
  <p>where d[C<sub>b</sub>] is the amount of strong base added and dpH is the resulting pH change.</p>
  <p>To maximize buffering capacity:</p>
  <ul>
    <li><strong>Match pH to pKₐ:</strong> Buffering capacity is maximal when pH = pKₐ and decreases as the pH deviates from the pKₐ.</li>
    <li><strong>Use higher concentrations:</strong> A 100 mM buffer has roughly twice the capacity of a 50 mM buffer at the same pH.</li>
    <li><strong>Stay within ±1 pH unit of pKₐ:</strong> Outside this range, the buffer has very little capacity in one direction.</li>
  </ul>
  <p>For most biological applications, buffer concentrations of 10–100 mM provide adequate buffering capacity.</p>
</details>

<details>
  <summary><strong>Is this calculator suitable for cell culture buffer preparation?</strong></summary>
  <p><strong>Yes, with caveats.</strong> The calculator provides accurate recipes for common cell culture buffers including PBS and HEPES. However, for cell culture applications:</p>
  <ul>
    <li>Always filter-sterilize (0.22 µm) buffers before adding to cells.</li>
    <li>Verify osmolarity — cell culture media should be isotonic (~280–320 mOsm/L).</li>
    <li>HEPES is preferred for CO₂-independent culture; PBS is a wash buffer, not a growth medium.</li>
    <li>Endotoxin levels should be monitored for sensitive cell types.</li>
  </ul>
</details>

<details>
  <summary><strong>How do I prepare 1× PBS from a 10× stock?</strong></summary>
  <p>To prepare 1 L of 1× PBS from a 10× stock:</p>
  <ol>
    <li>Measure <strong>100 mL</strong> of 10× PBS stock solution.</li>
    <li>Add to ~800 mL of ultrapure water.</li>
    <li>Mix thoroughly and check the pH — adjust if necessary.</li>
    <li>Bring to a final volume of <strong>1 L</strong> with water.</li>
  </ol>
  <p>Alternatively, use the recipe from this calculator at 1× concentration (e.g., 137 mM NaCl, 2.7 mM KCl, 10 mM phosphate, pH 7.4) for direct preparation. Use our <a href="../dilution-calculator/">Dilution Calculator</a> for other dilution factors.</p>
</details>

<details>
  <summary><strong>Why does my Tris buffer pH change when I cool it to 4°C?</strong></summary>
  <p>Tris buffers have a strong temperature coefficient of –0.028 pH units/°C. This means that the pH of a Tris buffer increases by approximately 0.028 units for every 1°C decrease in temperature. A Tris buffer prepared at pH 8.0 at 25°C will have a pH of approximately <strong>8.6 at 4°C</strong> and approximately <strong>7.7 at 37°C</strong>.</p>
  <p>For temperature-sensitive experiments:</p>
  <ul>
    <li>Prepare and adjust pH at the temperature at which the buffer will be used.</li>
    <li>Consider using HEPES (dpH/dT = –0.014) or phosphate (dpH/dT = –0.003) buffers instead.</li>
    <li>Always report the temperature at which pH was measured when publishing results.</li>
  </ul>
</details>

<details>
  <summary><strong>Can I use this calculator for MOPS or MES buffers?</strong></summary>
  <p><strong>Not directly</strong> — this calculator supports PBS, Tris-HCl, HEPES, acetate, citrate, and phosphate buffers. However, MOPS (pKₐ = 7.20) and MES (pKₐ = 6.15) are zwitterionic "Good's buffers" that follow the same Henderson–Hasselbalch principles. To prepare them manually:</p>
  <ul>
    <li>Weigh the calculated mass of MOPS or MES free acid.</li>
    <li>Dissolve in ~80% of the final volume of water.</li>
    <li>Adjust pH with NaOH (for MOPS/MES free acid) or HCl (for MOPS/MES sodium salt).</li>
    <li>Bring to final volume.</li>
  </ul>
  <p>The calculation procedure is identical to the Tris-HCl or HEPES examples shown above — substitute the appropriate pKₐ and molecular weight.</p>
</details>

<details>
  <summary><strong>How do I account for hydrated salts in buffer recipes?</strong></summary>
  <p>Hydrated salts contain water molecules in their crystal structure, which adds to their molecular weight. Common hydrated forms include:</p>
  <ul>
    <li><strong>Na₂HPO₄·7H₂O</strong> (dibasic sodium phosphate heptahydrate, MW = 268.07 g/mol)</li>
    <li><strong>NaH₂PO₄·H₂O</strong> (monobasic sodium phosphate monohydrate, MW = 137.99 g/mol)</li>
    <li><strong>Sodium acetate·3H₂O</strong> (trihydrate, MW = 136.08 g/mol)</li>
    <li><strong>Sodium citrate·2H₂O</strong> (dihydrate, MW = 294.10 g/mol)</li>
  </ul>
  <p>When calculating the mass needed, always use the molecular weight corresponding to the specific hydrated form you have in your reagent bottle. Using the anhydrous MW for a hydrated salt will result in weighing too little of the actual reagent.</p>
</details>

<details>
  <summary><strong>What is the difference between PBS and phosphate buffer?</strong></summary>
  <p><strong>Phosphate buffer</strong> contains only phosphate species (NaH₂PO₄/Na₂HPO₄) and provides pH buffering. <strong>PBS (Phosphate-Buffered Saline)</strong> additionally contains NaCl and KCl to provide physiological osmolarity and ionic strength — it mimics the salt concentration of the human body.</p>
  <p>Use PBS for:</p>
  <ul>
    <li>Washing cells or tissues</li>
    <li>Immunoassay wash steps (ELISA, Western blot)</li>
    <li>Cell culture applications requiring isotonic conditions</li>
  </ul>
  <p>Use plain phosphate buffer for:</p>
  <ul>
    <li>Chromatography (where NaCl may interfere)</li>
    <li>Enzyme assays where specific ionic strength is desired</li>
    <li>Applications where potassium or sodium concentration must be controlled</li>
  </ul>
</details>

---

## Quick Component Reference

| Buffer System | Acid Form | Base Form | pKₐ (25°C) | Typical Conc. Range |
|--------------|-----------|-----------|:----------:|:-------------------:|
| Phosphate (pK₂) | NaH₂PO₄ | Na₂HPO₄ | 7.21 | 10–500 mM |
| Tris | Tris·HCl (cationic acid) | Tris base | 8.07 | 10–1000 mM |
| HEPES | HEPES (free acid) | HEPES⁻ (anion) | 7.55 | 10–100 mM |
| Acetate | CH₃COOH (acetic acid) | CH₃COO⁻ (acetate) | 4.76 | 10–200 mM |
| Citrate (pK₂) | H₂Cit⁻ | HCit²⁻ | 4.76 | 10–100 mM |
| Citrate (pK₃) | HCit²⁻ | Cit³⁻ | 6.40 | 10–100 mM |

---

## Related Tools

- [Dilution Calculator](../dilution-calculator/) — Calculate dilution volumes for stock solutions
- [Molarity Calculator](../molarity-calculator/) — Convert between concentration units
- [Peptide Properties Calculator](../peptide-property-calculator/) — Calculate peptide physicochemical properties
- [Molecular Weight Calculator](../molecular-weight-calculator/) — Calculate molecular weight from peptide sequence
- [pH Solubility Predictor](../solubility-predictor/) — Predict peptide solubility as a function of pH

<script>
// Buffer preparation calculator — complete implementation

const BUFFER_DATA = {
  pbs: {
    name: 'PBS (Phosphate-Buffered Saline)',
    hasPh: true,
    phMin: 6.5,
    phMax: 8.0,
    phDefault: 7.4,
    hasNaCl: true,
    naclDefault: 137,
    kcl: 2.7,
    totalPhosphate: 10,
    pka: 7.21,
    description: 'Standard phosphate-buffered saline for biological research.',
    components: function(conc, vol, ph, nacl) {
      const volL = vol / 1000;
      const ratio = Math.pow(10, ph - this.pka);
      const totalP = this.totalPhosphate / 1000; // converted to M
      const ha = totalP / (1 + ratio);
      const a = totalP - ha;
      const naclM = (nacl || this.naclDefault) / 1000;
      const kclM = this.kcl / 1000;
      return {
        'NaCl': { mw: 58.44, moles: naclM * volL },
        'KCl': { mw: 74.55, moles: kclM * volL },
        'Na₂HPO₄ (dibasic, anhydrous)': { mw: 141.96, moles: a * volL },
        'KH₂PO₄ (monobasic)': { mw: 136.09, moles: ha * volL }
      };
    },
    instructions: function(conc, vol, ph) {
      return 'Dissolve the weighed salts in approximately ' + (vol * 0.8).toFixed(0) + ' mL of ultrapure water. Adjust pH to ' + ph.toFixed(1) + ' using 1 M HCl or 1 M NaOH. Bring the final volume to ' + vol + ' mL with water. Filter sterilize through a 0.22 µm filter for cell culture use. Store at 4°C or room temperature.';
    }
  },
  tris: {
    name: 'Tris-HCl',
    hasPh: true,
    phMin: 7.0,
    phMax: 9.0,
    phDefault: 8.0,
    hasNaCl: false,
    pka: 8.07,
    description: 'Tris(hydroxymethyl)aminomethane buffer, common in biochemistry.',
    components: function(conc, vol, ph) {
      const volL = vol / 1000;
      const concM = conc / 1000;
      const totalMoles = concM * volL;
      // At the target pH, fraction of Tris that is protonated (Tris·H+)
      // pH = pKa + log([base]/[acid])  →  [base]/[acid] = 10^(pH-pKa)
      // But note: Tris pKa refers to the equilibrium Tris·H+ ⇌ Tris + H+
      // So [base]/[acid] = [Tris]/[Tris·H+] = 10^(pH-pKa)
      const ratio = Math.pow(10, ph - this.pka);
      const acidFrac = 1 / (1 + ratio); // fraction that is Tris·H+ (protonated)
      const trisMoles = totalMoles; // all Tris, regardless of protonation state
      // HCl needed = acidFrac * totalMoles (to protonate that fraction)
      const hclMoles = acidFrac * totalMoles;
      // Estimate volume of concentrated HCl
      const hclVol6M = hclMoles / 6; // liters of 6M HCl
      const hclVol1M = hclMoles / 1; // liters of 1M HCl
      return {
        'Tris base (MW 121.14)': { mw: 121.14, moles: trisMoles },
        'HCl (6 M) — estimated volume': { mw: 36.46, moles: hclMoles, vol: hclVol6M * 1000, volUnit: 'mL (6 M HCl)' },
        'HCl (1 M) — estimated volume (for fine adjustment)': { mw: 36.46, moles: 0, vol: hclVol1M * 1000, volUnit: 'mL (1 M HCl)' }
      };
    },
    instructions: function(conc, vol, ph) {
      return 'Dissolve the Tris base in approximately ' + (vol * 0.8).toFixed(0) + ' mL of ultrapure water. Add the estimated volume of 6 M HCl dropwise while stirring, monitoring pH continuously. Adjust carefully to pH ' + ph.toFixed(2) + ' using 1 M HCl for fine adjustments near the target. Bring to a final volume of ' + vol + ' mL. Note: Tris pH is highly temperature-dependent (ΔpH/°C = –0.028). Adjust pH at the temperature at which the buffer will be used.';
    }
  },
  hepes: {
    name: 'HEPES',
    hasPh: true,
    phMin: 6.8,
    phMax: 8.2,
    phDefault: 7.5,
    hasNaCl: false,
    pka: 7.55,
    description: 'N-2-hydroxyethylpiperazine-N\'-2-ethanesulfonic acid buffer, ideal for cell culture.',
    components: function(conc, vol, ph) {
      const volL = vol / 1000;
      const concM = conc / 1000;
      const totalMoles = concM * volL;
      const ratio = Math.pow(10, ph - this.pka);
      const acidFrac = 1 / (1 + ratio); // HEPES free acid fraction
      const baseFrac = 1 - acidFrac;    // HEPES⁻ (anion) fraction
      const hepesAcidMoles = acidFrac * totalMoles;
      // NaOH needed to deprotonate the acid fraction
      const naohMoles = hepesAcidMoles;
      return {
        'HEPES free acid (MW 238.30)': { mw: 238.30, moles: totalMoles },
        'NaOH (5 M) — estimated volume for pH adjustment': { mw: 40.00, moles: naohMoles, vol: naohMoles / 5 * 1000, volUnit: 'mL (5 M NaOH)' }
      };
    },
    instructions: function(conc, vol, ph) {
      return 'Dissolve the HEPES free acid in approximately ' + (vol * 0.8).toFixed(0) + ' mL of ultrapure water. Add the estimated volume of 5 M NaOH slowly while stirring until the pH reaches ' + ph.toFixed(2) + '. Use 1 M NaOH for fine adjustments. Bring to a final volume of ' + vol + ' mL. Filter sterilize for cell culture use. Store at 4°C.';
    }
  },
  acetate: {
    name: 'Acetate Buffer',
    hasPh: true,
    phMin: 3.5,
    phMax: 5.5,
    phDefault: 4.8,
    hasNaCl: false,
    pka: 4.76,
    description: 'Acetic acid / sodium acetate buffer, used in DNA extraction and HPLC.',
    components: function(conc, vol, ph) {
      const volL = vol / 1000;
      const concM = conc / 1000;
      const totalMoles = concM * volL;
      const ratio = Math.pow(10, ph - this.pka);
      const ha = totalMoles / (1 + ratio);  // acetic acid (CH₃COOH)
      const a = totalMoles - ha;             // acetate ion (CH₃COO⁻)
      // Acetic acid density ~1.05 g/mL, MW=60.05 → ~17.5 M for glacial
      const glacialAA_M = 17.5; // approximate molarity of glacial acetic acid
      const aaVol = ha / glacialAA_M * 1000; // mL of glacial acetic acid
      return {
        'Sodium acetate (anhydrous, MW 82.03)': { mw: 82.03, moles: a },
        'Sodium acetate·3H₂O (trihydrate, MW 136.08) — alternate': { mw: 136.08, moles: 0, alt: true },
        'Glacial acetic acid (17.5 M) — estimated volume': { mw: 60.05, moles: ha, vol: aaVol, volUnit: 'mL (glacial acetic acid)' }
      };
    },
    instructions: function(conc, vol, ph) {
      return 'Dissolve the sodium acetate in approximately ' + (vol * 0.8).toFixed(0) + ' mL of ultrapure water. Add the estimated volume of glacial acetic acid slowly while stirring. Adjust pH to ' + ph.toFixed(2) + ' using either acetic acid (to lower pH) or sodium acetate (to raise pH). Bring to a final volume of ' + vol + ' mL with water.';
    }
  },
  citrate: {
    name: 'Citrate Buffer',
    hasPh: true,
    phMin: 3.0,
    phMax: 6.5,
    phDefault: 4.8,
    hasNaCl: false,
    pka: 4.76, // use pKa2 as the dominant one for most biological citrate buffers
    pka2: 6.40,
    pka1: 3.13,
    description: 'Citric acid / sodium citrate buffer, used for antigen retrieval and anticoagulation.',
    components: function(conc, vol, ph) {
      const volL = vol / 1000;
      const concM = conc / 1000;
      const totalMoles = concM * volL;
      // For citrate, we have three pKa values. For the typical pH range:
      // pH 3.0-4.0: use pKa1 (3.13) → H3Cit/H2Cit⁻
      // pH 4.0-5.5: use pKa2 (4.76) → H2Cit⁻/HCit²⁻
      // pH 5.5-6.5: use pKa3 (6.40) → HCit²⁻/Cit³⁻
      let pka = this.pka2;
      let acidLabel = 'Sodium citrate (dibasic, Na₂HCit)';
      let baseLabel = 'Sodium citrate (tribasic, Na₃Cit)';
      if (ph < 4.0) {
        pka = this.pka1;
        acidLabel = 'Citric acid (H₃Cit, MW 192.12)';
        baseLabel = 'Sodium citrate (monobasic, NaH₂Cit)';
      } else if (ph >= 4.0 && ph < 5.5) {
        pka = this.pka2;
        acidLabel = 'Sodium citrate (monobasic, NaH₂Cit)';
        baseLabel = 'Sodium citrate (dibasic, Na₂HCit)';
      } else {
        pka = this.pka2;
        acidLabel = 'Sodium citrate (dibasic, Na₂HCit)';
        baseLabel = 'Sodium citrate (tribasic, Na₃Cit)';
      }
      const ratio = Math.pow(10, ph - pka);
      const ha = totalMoles / (1 + ratio);
      const a = totalMoles - ha;
      return {
        [acidLabel]: { mw: ph < 4.0 ? 192.12 : (ph < 5.5 ? 214.11 : 236.09), moles: ha },
        [baseLabel]: { mw: ph < 4.0 ? 214.11 : (ph < 5.5 ? 236.09 : 258.07), moles: a }
      };
    },
    instructions: function(conc, vol, ph) {
      return 'Dissolve the weighed citrate salts in approximately ' + (vol * 0.8).toFixed(0) + ' mL of ultrapure water. Adjust pH to ' + ph.toFixed(2) + ' using 1 M HCl or 1 M NaOH as needed. Bring to a final volume of ' + vol + ' mL. Citrate buffers are commonly used at 10–50 mM for antigen retrieval (pH 6.0) and at 100 mM for anticoagulant applications (pH 4.5–5.0).';
    }
  },
  phosphate: {
    name: 'Phosphate Buffer',
    hasPh: true,
    phMin: 5.5,
    phMax: 8.0,
    phDefault: 7.2,
    hasNaCl: false,
    pka: 7.21,
    description: 'Sodium phosphate buffer, widely used in protein biochemistry.',
    components: function(conc, vol, ph) {
      const volL = vol / 1000;
      const concM = conc / 1000;
      const totalMoles = concM * volL;
      const ratio = Math.pow(10, ph - this.pka);
      const ha = totalMoles / (1 + ratio);  // H₂PO₄⁻
      const a = totalMoles - ha;             // HPO₄²⁻
      return {
        'NaH₂PO₄·H₂O (monobasic, MW 137.99)': { mw: 137.99, moles: ha },
        'NaH₂PO₄ (anhydrous, MW 119.98) — alternate': { mw: 119.98, moles: 0, alt: true },
        'Na₂HPO₄ (dibasic, anhydrous, MW 141.96)': { mw: 141.96, moles: a },
        'Na₂HPO₄·7H₂O (dibasic heptahydrate, MW 268.07) — alternate': { mw: 268.07, moles: 0, alt: true }
      };
    },
    instructions: function(conc, vol, ph) {
      return 'Dissolve both phosphate salts in approximately ' + (vol * 0.8).toFixed(0) + ' mL of ultrapure water. Adjust pH to ' + ph.toFixed(2) + ' using 1 M H₃PO₄ (to lower pH) or 1 M NaOH (to raise pH). Bring to a final volume of ' + vol + ' mL. For chromatography applications, degas the buffer under vacuum with stirring before use.';
    }
  }
};

function updateBufferOptions() {
  const type = document.getElementById('buf-type').value;
  const data = BUFFER_DATA[type];
  if (!data) return;

  const phField = document.getElementById('buf-ph-field');
  const phInput = document.getElementById('buf-ph');
  const phRange = document.getElementById('buf-ph-range');
  const naclField = document.getElementById('buf-nacl-field');
  const naclInput = document.getElementById('buf-nacl');

  if (data.hasPh) {
    phField.style.display = 'block';
    phInput.min = data.phMin;
    phInput.max = data.phMax;
    phInput.value = data.phDefault;
    phRange.textContent = 'Recommended range: ' + data.phMin + '–' + data.phMax;
  } else {
    phField.style.display = 'none';
  }

  if (data.hasNaCl) {
    naclField.style.display = 'block';
    naclInput.value = data.naclDefault;
  } else {
    naclField.style.display = 'none';
  }
}

function calcBuffer() {
  const type = document.getElementById('buf-type').value;
  const conc = parseFloat(document.getElementById('buf-conc').value);
  const vol = parseFloat(document.getElementById('buf-vol').value);
  const ph = parseFloat(document.getElementById('buf-ph').value);
  const nacl = parseFloat(document.getElementById('buf-nacl').value);

  const data = BUFFER_DATA[type];
  if (!data) return;

  // Validation
  if (!conc || conc <= 0) { alert('Please enter a valid target concentration.'); return; }
  if (!vol || vol <= 0) { alert('Please enter a valid target volume.'); return; }
  if (data.hasPh && (!ph || ph < data.phMin || ph > data.phMax)) {
    alert('pH must be between ' + data.phMin + ' and ' + data.phMax + ' for ' + data.name + '.');
    return;
  }

  const components = data.components(conc, vol, ph, nacl);
  const resultDiv = document.getElementById('buf-result');
  const summary = document.getElementById('buf-summary');
  const tbody = document.getElementById('buf-components-body');
  const instructions = document.getElementById('buf-instructions');

  // Show result
  resultDiv.style.display = 'block';

  // Summary
  summary.textContent = data.name + ' — ' + conc + ' mM, ' + vol + ' mL, pH ' + (ph ? ph.toFixed(2) : 'N/A');

  // Build table
  tbody.innerHTML = '';
  let totalMass = 0;
  for (const [name, comp] of Object.entries(components)) {
    if (comp.alt) continue; // skip alternate forms in main table
    const tr = document.createElement('tr');
    const mass = comp.moles * comp.mw;
    totalMass += mass;
    let amountStr, unitStr;
    if (comp.vol !== undefined) {
      amountStr = comp.vol.toFixed(2);
      unitStr = comp.volUnit || 'mL';
    } else if (mass >= 1) {
      amountStr = mass.toFixed(4);
      unitStr = 'g';
    } else if (mass >= 0.001) {
      amountStr = (mass * 1000).toFixed(2);
      unitStr = 'mg';
    } else {
      amountStr = (mass * 1e6).toFixed(2);
      unitStr = 'µg';
    }
    tr.innerHTML = '<td>' + name + '</td><td>' + comp.mw.toFixed(2) + '</td><td>' + amountStr + '</td><td>' + unitStr + '</td>';
    tbody.appendChild(tr);

    // Also add hydrated/alternate forms as notes
    // Check if next is an alternate
    const keys = Object.keys(components);
    const idx = keys.indexOf(name);
    if (idx < keys.length - 1 && components[keys[idx+1]] && components[keys[idx+1]].alt) {
      const altComp = components[keys[idx+1]];
      const altMass = comp.moles * altComp.mw;
      const altTr = document.createElement('tr');
      altTr.style.color = '#888';
      altTr.style.fontStyle = 'italic';
      let altAmountStr = altMass >= 1 ? altMass.toFixed(4) + ' g' : (altMass*1000).toFixed(2) + ' mg';
      altTr.innerHTML = '<td>↳ ' + keys[idx+1] + '</td><td>' + altComp.mw.toFixed(2) + '</td><td colspan="2">' + altAmountStr + ' (alternate)</td>';
      tbody.appendChild(altTr);
    }
  }

  // Instructions
  instructions.innerHTML = '<h4>Preparation Instructions</h4><p>' + data.instructions(conc, vol, ph) + '</p>';

  // Scroll to result
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearBuffer() {
  document.getElementById('buf-conc').value = '50';
  document.getElementById('buf-vol').value = '500';
  document.getElementById('buf-ph').value = '7.4';
  document.getElementById('buf-nacl').value = '137';
  document.getElementById('buf-result').style.display = 'none';
  document.getElementById('buf-type').value = 'pbs';
  updateBufferOptions();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateBufferOptions();
});
</script>
