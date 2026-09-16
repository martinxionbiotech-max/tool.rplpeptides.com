---
title: Peptide Comparison Tool
description: Free online peptide comparison tool — compare peptides side-by-side by class, length, molecular weight, structure, and research applications. Integrated with product data from RPL Peptide.
---

# Peptide Comparison Tool

Compare multiple peptides side-by-side across key parameters — class, sequence length, molecular weight, mechanism, and research applications. Request COA and product specification sheets for compared peptides.

---

## Compare Peptides

<div class="calc-card">
  <label for="comp-select">Select Peptides to Compare (select 2–4)</label>
  <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="tirzepatide" checked> Tirzepatide</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="semaglutide" checked> Semaglutide</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="retatrutide" checked> Retatrutide</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="ghk-cu"> GHK-Cu</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="bpc-157"> BPC-157</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="tb-500"> TB-500</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="semax"> Semax</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="epitalon"> Epitalon</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="mk-677"> MK-677 (Ibutamoren)</label>
    <label style="display:flex; align-items:center; gap:0.3rem; width:48%;"><input type="checkbox" class="comp-cb" value="ipamorelin"> Ipamorelin</label>
  </div>
  <div class="calc-hint">Select 2–4 peptides to compare. Data is sourced from verified reference databases.</div>
  <button class="calc-btn" onclick="comparePeptides()">Compare Selected Peptides</button>

  <div id="comp-result" style="display:none; margin-top:1.5rem;">
    <h3>Comparison Matrix</h3>
    <table id="comp-table" class="calc-compare-table">
    </table>
    
    <div id="comp-cta" style="margin-top:1.5rem; padding:1.2rem; background:rgba(63,81,181,0.08); border-radius:8px; text-align:center;">
      <p style="font-size:1.1rem; font-weight:600; margin-bottom:0.5rem;">Need detailed specifications?</p>
      <p style="font-size:0.9rem; margin-bottom:1rem;">Request Certificate of Analysis (COA) and product specifications for any of the compared peptides.</p>
      <a id="comp-coa-link" href="https://rplpeptides.com/coa-request/" class="md-button md-button--primary" target="_blank">Request COA →</a>
      <a id="comp-store-link" href="https://rplpeptides.com/product-list/" class="md-button" target="_blank" style="margin-left:0.5rem;">Browse Products →</a>
    </div>
  </div>
</div>

---

## What This Calculator Does

Select two to four peptides and the tool assembles a side-by-side comparison matrix across the parameters that matter before a research decision: class, category, sequence length, molecular weight, mechanism of action, research applications, and standard purity specification. The matrix is generated from a built-in reference set of ten compounds, so results are consistent and reproducible run to run. The results panel also carries request links for Certificates of Analysis and product specification sheets.

Nothing is uploaded or stored — the comparison runs entirely in the browser from the built-in records. The sections below describe how the matrix is assembled, walk through a comparison, and note what the reference values do and do not tell you.

## How the Comparison Matrix Is Built

The matrix is an assembly job rather than a computation: each selected peptide maps to a fixed record, and the table places those records in columns so the rows line up. A few consequences are worth knowing up front:

- **Values are reference figures.** Lengths are residue counts in amino acids, molecular weights are reported in daltons to one decimal, and purity is the specification standard for the compound — not a measurement of any particular lot.
- **No ranking or scoring.** The tool does not weight parameters or declare a winner; every row is presented at equal strength so you can apply your own criteria.
- **Fixed vocabulary.** Categories (GLP-1, Tissue Repair, Cosmetic, Neuro, Sleep/Pineal, Growth Factors) group compounds by research area, which keeps cross-category comparisons readable.
- **One small-molecule guest.** MK-677 (Ibutamoren) is included as a growth-hormone secretagogue reference; it is not a peptide, so its length row reads "N/A (small mol.)".

## Worked Example

Compare the three metabolic peptides in the reference set — tirzepatide, semaglutide, and retatrutide — the way a literature-planning step would.

**Step 1 — Select the compounds.** Tick the tirzepatide, semaglutide, and retatrutide checkboxes (the three are pre-selected on load) and run the comparison.

**Step 2 — Read down the mechanism row.** The receptor profile separates them immediately:

| Compound | Mechanism of action |
|----------|--------------------|
| Tirzepatide | GIP + GLP-1 receptor agonist |
| Semaglutide | Selective GLP-1 receptor agonist |
| Retatrutide | GIP + GLP-1 + glucagon receptor agonist |

**Step 3 — Check the structural rows.** Length and mass agree with the mechanism row: tirzepatide and retatrutide are both 39-residue constructs with reported molecular weights of 4,813.5 Da and 4,840.6 Da, while semaglutide is the smaller 31-residue GLP-1 analogue at 4,113.6 Da. Two near-identical lengths with different receptor pharmacology is exactly the kind of gap a side-by-side table exposes quickly.

**Step 4 — Note the shared specification.** All three carry a ≥ 98% purity specification in the matrix, so purity does not discriminate between them — receptor breadth does.

**Result:** the walkthrough answers the planning question in one view — mechanism separates these compounds; size and purity specification do not — and the request buttons on the results panel carry the short list forward to COA requests.

---

## How to Use This Comparison for Research Decisions

When selecting a peptide for research, the comparison matrix above provides a structured way to evaluate candidates across multiple dimensions. Here's how to use it effectively:

### 1. Compare by Core Parameters

Start by reviewing **class, sequence length, molecular weight, and mechanism of action** for each peptide. These parameters define the fundamental characteristics of each compound and determine its suitability for specific research applications.

- **Class** tells you the peptide's functional category (e.g., GLP-1 agonist, tissue repair, neuropeptide) — peptides within the same class often share overlapping mechanisms
- **Length and MW** affect stability, solubility, and administration considerations in research protocols
- **Mechanism of action** is the most critical differentiator — two peptides targeting the same general area may work through entirely different pathways

### 2. Understand Key Category Differences

**GLP-1 Agonists — Tirzepatide vs. Semaglutide vs. Retatrutide**

These three metabolic peptides illustrate how subtle receptor-targeting differences can lead to distinct research applications:

| Peptide | Receptor Target | Research Application |
|---------|----------------|---------------------|
| **Tirzepatide** | GIP + GLP-1 (dual agonist) | Dual pathway metabolic research, comparative efficacy studies |
| **Semaglutide** | GLP-1 (selective agonist) | Selective GLP-1 receptor studies, monotherapy models |
| **Retatrutide** | GIP + GLP-1 + Glucagon (triple agonist) | Triple agonism research, multi-receptor crosstalk studies |

Tirzepatide's dual agonism activates both GIP and GLP-1 receptors, offering broader metabolic pathway research. Semaglutide's selective GLP-1 agonism provides a focused tool for studying GLP-1-specific effects. Retatrutide's triple agonism adds glucagon receptor activation, enabling research into combined energy expenditure and glycemic control pathways.

**Tissue Repair — BPC-157 vs. TB-500**

These two popular regenerative peptides work through fundamentally different mechanisms:

- **BPC-157** promotes angiogenesis (formation of new blood vessels) and systemic tissue protection, supporting recovery through improved blood supply to damaged tissues
- **TB-500 (Thymosin β4 fragment)** binds actin and promotes cell migration, supporting tissue regeneration through cytoskeletal remodeling and cell motility

Using these peptides in combination for research can explore **synergistic mechanisms** — angiogenesis from BPC-157 paired with actin-binding cell migration from TB-500 addresses tissue repair through complementary pathways.

### 3. Apply Comparisons to Purchasing Decisions

The comparison matrix directly links to product pages and COA requests. After evaluating peptides side-by-side:

- Use the **product links** in the comparison table to navigate directly to detailed specification sheets
- Click **Request COA** to obtain Certificate of Analysis documentation for the peptides you've compared
- Cross-reference molecular weight, sequence, and purity data against your research protocol requirements

---

## Peptide Selection Guide

Use this quick-reference table to identify the best peptide for your specific research objective:

| Research Goal | Recommended Peptide(s) | Reason |
|---------------|----------------------|--------|
| Metabolic / Weight Loss Research | Tirzepatide or Semaglutide | GLP-1 receptor agonism for metabolic pathway studies |
| Triple Agonism Research | Retatrutide | GIP + GLP-1 + glucagon triple receptor activation |
| Soft Tissue Recovery Research | BPC-157 + TB-500 | Synergistic angiogenesis + actin-binding mechanisms |
| Dermal / Anti-Aging Research | GHK-Cu | Copper-dependent collagen synthesis and matrikine signaling |
| Cognitive Enhancement Research | Semax | BDNF and NGF modulation for neuroprotection studies |
| Sleep / Pineal Function Research | Epitalon | Telomerase regulation and circadian rhythm modulation |
| GH Secretagogue Research | MK-677 or Ipamorelin | GHS receptor agonism for growth hormone pathway studies |

This guide maps research goals to specific peptides, but always verify detailed specifications — including purity, sequence confirmation, and stability data — via the product pages and COA documentation.

---

## Frequently Asked Questions

<div class="faq-q"><strong>How do I know which peptide is right for my research?</strong></div>

<p>Start by identifying your research goal (e.g., metabolic studies, tissue repair, cognitive function). Use the <strong>Peptide Selection Guide</strong> above to match your goal to a recommended peptide. Then use the comparison tool to evaluate 2–4 candidates side-by-side by class, mechanism, molecular weight, and research applications. Finally, review the detailed technical profiles at <a href="https://data.rplpeptides.com/" target="_blank">data.rplpeptides.com</a> and request a Certificate of Analysis to verify purity and specifications.</p>

<div class="faq-q"><strong>What's the difference between GLP-1 agonists?</strong></div>

<p>GLP-1 agonists differ primarily in their <strong>receptor selectivity profile</strong>. Semaglutide is a selective GLP-1 receptor agonist, targeting only the GLP-1 pathway. Tirzepatide is a dual agonist (GIP + GLP-1), activating two receptor systems simultaneously. Retatrutide is a triple agonist (GIP + GLP-1 + glucagon), adding glucagon receptor activation for broader metabolic research. The choice depends on whether your research requires single-pathway selectivity, dual-pathway comparison, or multi-receptor crosstalk analysis.</p>

<div class="faq-q"><strong>Can I compare peptides from different categories?</strong></div>

<p>Yes — the comparison tool is designed to work across categories. You can select peptides from any combination of classes (e.g., a GLP-1 agonist alongside a tissue repair peptide). The matrix will display all key parameters side-by-side, allowing you to evaluate class, mechanism, and structural differences even across unrelated peptide families. This is useful for broad surveying or when designing multi-compound research protocols.</p>

<div class="faq-q"><strong>How do I request a Certificate of Analysis?</strong></div>

<p>After selecting the peptides you'd like to compare, click the <strong>"Request COA →"</strong> button displayed in the comparison results. This will take you to the COA request form at <a href="https://rplpeptides.com/coa-request/" target="_blank">rplpeptides.com/coa-request/</a> with the first compared peptide pre-selected. You can request COAs for any or all of the compared peptides from the form. Certificates include verified purity, sequence confirmation, and analytical data.</p>

<div class="faq-q"><strong>Where can I find more detailed technical data?</strong></div>

<p>Visit <a href="https://data.rplpeptides.com/" target="_blank">data.rplpeptides.com</a> for comprehensive technical profiles on each peptide, including detailed sequence information, structural data, stability studies, and research references. Product-specific specification sheets are also available from each product page at <a href="https://rplpeptides.com/product-list/" target="_blank">rplpeptides.com</a>.</p>

---

## From Comparison to Purchase

The comparison matrix is more than a research tool — it's your bridge from product specifications to purchasing decisions.

### How to Take the Next Steps

1. **Compare your candidates** using the interactive tool above to evaluate class, mechanism, molecular weight, and applications side-by-side
2. **Visit data.rplpeptides.com** for full technical profiles — each peptide's detailed characterization including sequence confirmation, analytical data, and research references
3. **Request a Certificate of Analysis** from <a href="https://rplpeptides.com/coa-request/" target="_blank">rplpeptides.com/coa-request/</a> to verify purity and specifications before purchase
4. **Browse and order** from the complete product catalog — each product page links back to the corresponding comparison data

### Why This Matters

The comparison tool links product specifications directly to research needs. Instead of jumping between datasheets, you can evaluate multiple candidates in a single view, match parameters to your protocol requirements, and proceed directly to documentation or purchase — all from one interface.

<a href="https://rplpeptides.com/product-list/" class="md-button md-button--primary" target="_blank" style="display:inline-block; margin-top:0.5rem;">Browse All Products at rplpeptides.com →</a>

---

## Peptide Reference Data

| Peptide | Class | Length | MW (Da) | Sequence (1-letter) |
|---------|-------|--------|---------|-------------------|
| Tirzepatide | GIP/GLP-1 Dual Agonist | 39 | 4,813.5 | YXGEGTFTSDYSILDSKKQRAKQFVQWLLAGGPSSGAPPPS |
| Semaglutide | GLP-1 Agonist | 31 | 4,113.6 | HGEGTFTSDVSSYLEEQAAKEFIAWLVKGRG |
| Retatrutide | Triple GIP/GLP-1/GCG | 39 | 4,840.6 | YXGEGTFTSDYSILDSKKQRAKQFVQWLLAGGPSSGAPPPS |
| BPC-157 | Tissue Repair | 15 | 1,419.5 | GEPPPGKPADDAGLV |
| TB-500 | Regenerative | 5 | 500.5 | Ac-SDKP |
| GHK-Cu | Cosmetic | 3 | 466.4 (complex) | GHK |
| Semax | Neuropeptide | 7 | 706.8 | MEHFPGP |
| Epitalon | Pineal Regulator | 4 | 375.4 | AEDG |
| MK-677 | GHS Agonist | N/A (small mol.) | 528.7 | N/A |

---

## Using Comparison Results

The comparison tool helps you:

1. **Evaluate alternatives** — Compare structural and functional differences between peptide candidates
2. **Inform purchasing decisions** — Side-by-side parameter comparison for procurement
3. **Cross-reference with data.rplpeptides.com** — Detailed technical profiles for each compound
4. **Request documentation** — Direct CTA to COA requests and product specifications

---

## Assumptions and Rounding

- **Fixed reference set.** The matrix draws on ten built-in records; compounds outside the list cannot be compared, and the values are not editable.
- **Representative values.** Molecular weights are rounded to one decimal place in daltons; purity figures are specification standards ("≥ 98%"), not analytical results for a specific batch.
- **No weighting model.** Every row carries equal weight; the tool computes no score, rank, or recommendation.
- **Selection bounds.** A comparison requires 2–4 compounds; fewer or more selections produce a prompt instead of a matrix.
- **Link behavior.** The "Request COA" button passes the first compared compound to the request form as a query parameter; the remaining compounds are added on the form itself.

## Input Definitions

| Input | What it means | Units | Allowed values |
|---|---|---|---|
| Peptide checkboxes | The compounds that enter the matrix | — | Ten reference compounds: Tirzepatide, Semaglutide, Retatrutide, GHK-Cu, BPC-157, TB-500, Semax, Epitalon, MK-677, Ipamorelin |
| Selection count | How many compounds a single comparison accepts | compounds | 2–4 |

The matrix is rebuilt on each press of the Compare button; changing the checkboxes alone does not update the current results until the button is pressed again.

## Output Interpretation

The matrix has one row per parameter and one column per compound:

| Row | How to read it |
|---|---|
| Peptide | Compound name from the reference set |
| Class | Functional class (e.g., "GLP-1/GIP Dual Agonist") |
| Category | Research grouping used across this site |
| Length | Residue count; "N/A (small mol.)" for the non-peptide entry |
| Molecular Weight | Reported mass in daltons, one decimal |
| Mechanism | Receptor or pathway description — usually the deciding row |
| Research Applications | Typical research contexts for the compound |
| Standard Purity | Purity specification standard, not a lot measurement |

Below the matrix, the request panel links to COA requests and the product catalogue. The matrix itself produces no calculated or scored output — the interpretation is entirely the comparison you make across columns.

## Limitations

- **Ten compounds only.** The reference set covers the most-requested compounds on this site; it is not a database, and other peptides need their own documentation.
- **Reference values, not lot data.** Molecular weight, length, and purity entries are standard figures; always confirm against the COA or technical sheet for the actual batch.
- **No sequence-level comparison.** The matrix compares summary parameters; it does not align sequences or compute similarity.
- **Condensed mechanism summaries.** Mechanism lines are one-sentence pointers to the literature, not full pharmacology.
- **No scoring or recommendation.** Nothing tells you which compound is "better" — that judgment depends on the research question.

## The Author's Take

**Position — in my view, a comparison table is a tool for eliminating candidates, not for selecting them; the column you end up circling is usually the mechanism row, not the numbers.**

**Reasoning.** Gross parameters — length, mass, purity specification — rarely separate compounds competing for the same study; two 39-residue analogues can differ in receptor breadth more than in any figure the table prints. The faster path is to let the table cut the list to two or three mechanistically distinct options, then go read the primary literature for the survivors. I would also resist reading a shared "≥ 98%" row as a quality equivalence: that is a specification, and specifications are promises, not measurements. The certificate for the actual lot is where quality gets settled.

**Disclosure.** This is the author's opinion from working with peptide documentation, not a verified fact; weighting of criteria should follow your own study design.

## Related Research & Peptide Data

The matrix condenses what longer comparisons explore in full:

- **Research:** [Semaglutide vs Tirzepatide](https://research.rplpeptides.com/comparisons/semaglutide-vs-tirzepatide/) — a full head-to-head of two compounds this tool places side by side.
- **Research:** [Single vs Multi-Receptor Agonists](https://research.rplpeptides.com/comparisons/single-vs-multi-receptor-agonists/) — why receptor breadth is the row that decides metabolic comparisons.
- **Data:** [Semaglutide Technical Manual](https://data.rplpeptides.com/semaglutide/semaglutide-complete-documentation/) — an example of the full documentation a single matrix row condenses.
- **Data:** [Peptide Glossary](https://data.rplpeptides.com/glossary/peptide-glossary/) — terminology for the class, mechanism, and purity fields above.

---

## Related Tools

- [Molecular Weight Calculator](molecular-weight-calculator/) — Calculate MW of custom sequences
- [Peptide Properties Calculator](peptide-property-calculator/) — Detailed characterization
- [Visit data.rplpeptides.com](https://data.rplpeptides.com/) — Complete peptide database

<script>
const PEPTIDE_DATA = {
  tirzepatide: { 
    name: 'Tirzepatide', 
    class: 'GLP-1/GIP Dual Agonist', 
    cat: 'GLP-1', 
    length: '39 AA', 
    mw: '4,813.5 Da',
    mech: 'GIP + GLP-1 receptor agonist',
    apps: 'Metabolic research, T2D, weight management',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/tirzepatide/'
  },
  semaglutide: {
    name: 'Semaglutide',
    class: 'GLP-1 Agonist',
    cat: 'GLP-1',
    length: '31 AA',
    mw: '4,113.6 Da',
    mech: 'Selective GLP-1 receptor agonist',
    apps: 'Metabolic research, T2D, obesity',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/semaglutide/'
  },
  retatrutide: {
    name: 'Retatrutide',
    class: 'Triple GIP/GLP-1/GCG Agonist',
    cat: 'GLP-1',
    length: '39 AA',
    mw: '4,840.6 Da',
    mech: 'GIP + GLP-1 + glucagon receptor agonist',
    apps: 'Metabolic research, triple agonism studies',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/retatrutide/'
  },
  'ghk-cu': {
    name: 'GHK-Cu',
    class: 'Copper Peptide',
    cat: 'Cosmetic',
    length: '3 AA',
    mw: '466.4 Da (complex)',
    mech: 'Copper delivery + matrikine signaling',
    apps: 'Dermal research, wound healing, collagen studies',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/ghk-cu/'
  },
  'bpc-157': {
    name: 'BPC-157',
    class: 'Body Protection Compound',
    cat: 'Tissue Repair',
    length: '15 AA',
    mw: '1,419.5 Da',
    mech: 'Systemic tissue protection, angiogenesis',
    apps: 'Soft tissue recovery, GI research',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/bpc-157/'
  },
  'tb-500': {
    name: 'TB-500 (Thymosin β4)',
    class: 'Actin-Binding Peptide',
    cat: 'Tissue Repair',
    length: '5 AA (fragment)',
    mw: '500.5 Da',
    mech: 'Actin polymerization, cell migration',
    apps: 'Regenerative research, soft tissue',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/tb-500/'
  },
  semax: {
    name: 'Semax',
    class: 'ACTH(4-10) Analogue',
    cat: 'Neuro',
    length: '7 AA',
    mw: '706.8 Da',
    mech: 'BDNF/NGF modulation, neuroprotection',
    apps: 'Cognitive research, neuroprotection',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/semax/'
  },
  epitalon: {
    name: 'Epitalon',
    class: 'Pineal Tetrapeptide',
    cat: 'Sleep/Pineal',
    length: '4 AA',
    mw: '375.4 Da',
    mech: 'Telomerase regulation, circadian modulation',
    apps: 'Sleep research, pineal function, aging studies',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/epitalon/'
  },
  'mk-677': {
    name: 'MK-677 (Ibutamoren)',
    class: 'GHS Receptor Agonist',
    cat: 'Growth Factors',
    length: 'N/A (small mol.)',
    mw: '528.7 Da',
    mech: 'Ghrelin mimetic, GH secretagogue',
    apps: 'Growth hormone research, muscle studies',
    purity: '≥ 99%',
    store: 'https://rplpeptides.com/product/mk-677/'
  },
  ipamorelin: {
    name: 'Ipamorelin',
    class: 'GHS Pentapeptide',
    cat: 'Growth Factors',
    length: '5 AA',
    mw: '711.9 Da',
    mech: 'Selective GHS receptor agonist',
    apps: 'GH research, metabolic studies',
    purity: '≥ 98%',
    store: 'https://rplpeptides.com/product/ipamorelin/'
  }
};

function comparePeptides() {
  const checkboxes = document.querySelectorAll('.comp-cb:checked');
  const selected = Array.from(checkboxes).map(cb => cb.value);
  
  if (selected.length < 2 || selected.length > 4) {
    alert('Please select 2–4 peptides to compare.');
    return;
  }

  // Build table
  const fields = ['name', 'class', 'cat', 'length', 'mw', 'mech', 'apps', 'purity'];
  const labels = ['Peptide', 'Class', 'Category', 'Length', 'Molecular Weight', 'Mechanism', 'Research Applications', 'Standard Purity'];
  
  let html = '<thead><tr><th>Parameter</th>';
  for (let id of selected) {
    const p = PEPTIDE_DATA[id];
    html += '<th>' + (p ? p.name : id) + '</th>';
  }
  html += '</tr></thead><tbody>';
  
  for (let i = 0; i < fields.length; i++) {
    html += '<tr><td><strong>' + labels[i] + '</strong></td>';
    for (let id of selected) {
      const p = PEPTIDE_DATA[id];
      html += '<td>' + (p ? p[fields[i]] || '—' : '—') + '</td>';
    }
    html += '</tr>';
  }
  
  html += '</tbody>';
  
  document.getElementById('comp-table').innerHTML = html;
  document.getElementById('comp-result').style.display = 'block';
  document.getElementById('comp-result').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Update CTA links
  const firstId = selected[0];
  const p = PEPTIDE_DATA[firstId];
  if (p) {
    document.getElementById('comp-coa-link').href = 'https://rplpeptides.com/coa-request/?product=' + encodeURIComponent(p.name);
  }
}
</script>

<!-- JSON-LD: WebApplication -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Peptide Comparison Tool",
  "url": "https://tool.rplpeptides.com/peptide-comparison/",
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
