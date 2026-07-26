---
title: Amino Acid Code Converter — One-Letter to Three-Letter
description: Free online amino acid code converter — convert between one-letter and three-letter amino acid codes instantly. Includes full amino acid reference table with properties.
---

# Amino Acid Code Converter

Convert between one-letter and three-letter amino acid codes. Includes a complete reference table with chemical properties for all 20 standard amino acids.

---

## Converter

<div class="calc-card">
  <label for="aa-convert-mode">Conversion Direction</label>
  <select id="aa-convert-mode">
    <option value="to3">Three-Letter → One-Letter</option>
    <option value="to1">One-Letter → Three-Letter</option>
  </select>

  <label for="aa-input">Enter Amino Acid Codes</label>
  <textarea id="aa-input" placeholder="e.g., Ala Gly Lys (for 3-letter→1-letter) or AGK (for 1-letter→3-letter)" rows="3">Ala Gly Lys</textarea>
  <div class="calc-hint">Separate multiple codes with spaces or newlines. Mixed case is accepted.</div>

  <button class="calc-btn" onclick="convertAA()">Convert</button>
  <button class="calc-btn secondary" onclick="clearAA()" style="margin-left:0.5rem;">Clear</button>

  <div id="aa-result" class="calc-result">
    <h3>Conversion Result</h3>
    <div id="aa-output" style="font-size:1.3rem; font-family:monospace; padding:0.8rem; background:rgba(63,81,181,0.05); border-radius:6px;"></div>
  </div>
</div>

---

## Amino Acid Reference Table

| One-Letter | Three-Letter | Name | Side Chain Class | MW (Da) | pKa (R group) | Hydropathy |
|:----------:|:------------:|------|-----------------|---------|--------------|:----------:|
| A | Ala | Alanine | Nonpolar, Aliphatic | 71.08 | — | +1.800 |
| C | Cys | Cysteine | Polar, Sulfur | 103.14 | 8.37 | +2.500 |
| D | Asp | Aspartic Acid | Acidic | 115.09 | 3.90 | -3.500 |
| E | Glu | Glutamic Acid | Acidic | 129.12 | 4.07 | -3.500 |
| F | Phe | Phenylalanine | Aromatic | 147.18 | — | +2.800 |
| G | Gly | Glycine | Nonpolar, Aliphatic | 57.05 | — | -0.400 |
| H | His | Histidine | Basic, Aromatic | 137.14 | 6.00 | -3.200 |
| I | Ile | Isoleucine | Nonpolar, Aliphatic | 113.16 | — | +4.500 |
| K | Lys | Lysine | Basic | 128.17 | 10.50 | -3.900 |
| L | Leu | Leucine | Nonpolar, Aliphatic | 113.16 | — | +3.800 |
| M | Met | Methionine | Nonpolar, Sulfur | 131.19 | — | +1.900 |
| N | Asn | Asparagine | Polar, Amide | 114.10 | — | -3.500 |
| P | Pro | Proline | Cyclic (Imino) | 97.12 | — | -1.600 |
| Q | Gln | Glutamine | Polar, Amide | 128.13 | — | -3.500 |
| R | Arg | Arginine | Basic | 156.19 | 12.48 | -4.500 |
| S | Ser | Serine | Polar, Hydroxyl | 87.08 | — | -0.800 |
| T | Thr | Threonine | Polar, Hydroxyl | 101.10 | — | -0.700 |
| V | Val | Valine | Nonpolar, Aliphatic | 99.13 | — | +4.200 |
| W | Trp | Tryptophan | Aromatic | 186.21 | — | -0.900 |
| Y | Tyr | Tyrosine | Aromatic | 163.18 | 10.10 | -1.300 |

## Amino Acid Classification Guide

| Category | Amino Acids | Properties |
|:---|:---|:---|
| Nonpolar Aliphatic | Gly, Ala, Val, Leu, Ile, Pro | Hydrophobic, buried in protein cores |
| Aromatic | Phe, Tyr, Trp | Absorb UV at 280nm (important for spectroscopy) |
| Polar Uncharged | Ser, Thr, Cys, Asn, Gln | Hydrophilic, surface-exposed |
| Acidic (Negative) | Asp, Glu | Negatively charged at pH 7; pKa ~4 |
| Basic (Positive) | Lys, Arg, His | Positively charged at pH 7 (except His, pKa 6) |
| Special | Cys (disulfide), Pro (rigid), Gly (flexible) | Unique structural roles |

## Amino Acid Properties at a Glance

- **Hydrophobicity**: Most hydrophobic = Ile, Val, Leu; Most hydrophilic = Arg, Asp, Lys
- **Molecular weight**: Smallest = Gly (57 Da); Largest = Trp (186 Da)
- **Charge at pH 7**: Positive = Arg, Lys; Negative = Asp, Glu; Neutral = all others

## Common Usage Patterns

- **In peptide sequences**: single-letter codes are standard for sequences over 5 AA
- **In publications**: three-letter codes for individual residues in text
- **In databases**: single-letter codes for sequence storage
- **In patents**: both formats used interchangeably

## Frequently Asked Questions

<div class="faq-q">**Why are there both one-letter and three-letter codes?**</div>

The three-letter system was developed first and is more descriptive, making it useful in written text. The one-letter system was introduced later to support computer sequence analysis and compact representation of long sequences. Both standards are maintained by IUPAC.

<div class="faq-q">**How do I remember the one-letter codes?**</div>

A few mnemonic aids: A = Alanine (first letter), C = Cysteine (first letter), G = Glycine (first letter), H = Histidine (first letter), P = Proline (first letter), S = Serine (first letter), V = Valine (first letter). For others: F = **P**henylalanine (ph → F), R = a**R**ginine (letter R in name), Y = t**Y**rosine, K = lysine (sounds like **K**), D = aspar**D**ic acid, E = glutam**E**ic acid, M = **M** (contains M), T = **T** (contains T), W = t**W** (tryptophan, double ring), I = **I** (contains I), L = **L** (contains L), N = **N** (contains N), Q = **Q** (sounds like "cue" → glutamine).

<div class="faq-q">**What about non-standard amino acids?**</div>

Non-standard amino acids (e.g., selenocysteine Sec/U, pyrrolysine Pyl/O, hydroxyproline Hyp) do not have universally accepted one-letter codes. In sequences, they are often represented by special letters (U for selenocysteine, O for pyrrolysine) or written out in full. The converter above handles only the 20 standard amino acids.

<div class="faq-q">**Why are I and L different if they have the same mass?**</div>

Isoleucine (I) and Leucine (L) are structural isomers — they share the same molecular formula (C₆H₁₃NO₂) and therefore the same molecular weight (113.16 Da). However, they differ in the arrangement of their side chains: Leu has an unbranched isobutyl side chain, while Ile has a branched sec-butyl side chain. This structural difference gives them distinct biochemical properties and roles in proteins.

<div class="faq-q">**What does the U stand for in some sequences?**</div>

The letter U stands for **selenocysteine** (Sec), the 21st proteinogenic amino acid. It is a cysteine analog where sulfur is replaced by selenium. Selenocysteine is encoded by a special UGA codon (normally a stop codon) in the presence of a selenocysteine insertion sequence (SECIS) element. It is found in several selenoproteins important for antioxidant defense.

---

## Related Tools

- [Molecular Weight Calculator](../molecular-weight-calculator/) — Calculate peptide mass from sequence
- [Peptide Properties Calculator](../peptide-property-calculator/) — Compute pI, charge, GRAVY
- [Peptide Comparison Tool](../peptide-comparison/) — Compare peptides side-by-side

<script>
const AA_MAP_1TO3 = {
  'A': 'Ala', 'C': 'Cys', 'D': 'Asp', 'E': 'Glu', 'F': 'Phe',
  'G': 'Gly', 'H': 'His', 'I': 'Ile', 'K': 'Lys', 'L': 'Leu',
  'M': 'Met', 'N': 'Asn', 'P': 'Pro', 'Q': 'Gln', 'R': 'Arg',
  'S': 'Ser', 'T': 'Thr', 'V': 'Val', 'W': 'Trp', 'Y': 'Tyr'
};

const AA_MAP_3TO1 = {
  'ala': 'A', 'arg': 'R', 'asn': 'N', 'asp': 'D', 'cys': 'C',
  'glu': 'E', 'gln': 'Q', 'gly': 'G', 'his': 'H', 'ile': 'I',
  'leu': 'L', 'lys': 'K', 'met': 'M', 'phe': 'F', 'pro': 'P',
  'ser': 'S', 'thr': 'T', 'trp': 'W', 'tyr': 'Y', 'val': 'V'
};

function convertAA() {
  const mode = document.getElementById('aa-convert-mode').value;
  const input = document.getElementById('aa-input').value.trim();
  
  if (!input) {
    document.getElementById('aa-result').style.display = 'block';
    document.getElementById('aa-output').textContent = 'Please enter amino acid codes';
    return;
  }

  let result = '';
  
  if (mode === 'to1') {
    // Three-letter → One-letter
    const codes = input.toUpperCase().replace(/\s+/g, ' ').split(/[\s,]+/);
    result = codes.map(code => {
      code = code.trim().toLowerCase();
      // Handle full names too
      return AA_MAP_3TO1[code] || code.toUpperCase();
    }).join('');
    
  } else {
    // One-letter → Three-letter
    const chars = input.toUpperCase().replace(/[^ACDEFGHIKLMNPQRSTVWY]/g, '');
    result = chars.split('').map(c => AA_MAP_1TO3[c] || c).join('-');
  }

  document.getElementById('aa-result').style.display = 'block';
  document.getElementById('aa-output').textContent = result || 'No valid amino acid codes found';
  document.getElementById('aa-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearAA() {
  document.getElementById('aa-input').value = '';
  document.getElementById('aa-result').style.display = 'none';
}
</script>
