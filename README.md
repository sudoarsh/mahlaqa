# Deewan of Mah Laqa Bai Chanda: Digital Collation Archive

The open data and website behind the critical edition of the *Diwan* of Mah Laqa Bai Chanda (c. 1768–1824), one of the first women to compile a complete diwan in Urdu. The repository holds a couplet-by-couplet collation of the three manuscripts made in her lifetime against the 1906 print edition, so that every claim in the edition and the accompanying paper can be checked.

| | |
|---|---|
| **Website** | https://sudoarsh.github.io/mahlaqa |
| **Dataset** | https://doi.org/10.5281/zenodo.20587114 |
| **Paper** | [*Quantifying Corruption*](https://works.hcommons.org/records/yq3e6-4pc82), https://doi.org/10.17613/yq3e6-4pc82 |
| **Critical edition** | *Deewan-e-Chanda: Tanqeedi Edition*, https://doi.org/10.17613/phn4x-q9342 |

## Why this exists

For over a century the text of the *Diwan* has come from one source, the 1906 lithograph *Gulzar-e-Mah Laqa* (GM). No one had collated it against the surviving manuscripts. This collation shows that GM descends from the 1818 Salar Jung manuscript (SJ) and was heavily edited on the way: 50.2% of couplets are substantially changed from SJ, against at most 8.2% between any two consecutive lifetime manuscripts. Dakhni forms such as کسو, نئیں and جیوں are removed from GM almost entirely, although all three manuscripts keep them.

The paper sets out the method and results. The edition provides the restored text, the full apparatus and the commentary. This repository provides the data, so you can verify both.

## The witnesses

| Siglum | Date | Holding | Ghazals | Role |
|---|---|---|---|---|
| **BL** | 1799 | British Library, IO Islamic 2768 | 97 | Earliest witness; carries the Persian *dibācha* |
| **TO** | 1811 | Telangana Oriental Manuscript Library, MS 228 | 98 | Circle copy; close to BL |
| **SJ** | 1818 | Salar Jung Museum, Hyderabad | 125 | Base text of the edition |
| **GM** | 1906 | *Gulzar-e-Mah Laqa*, ed. Ghulam Samdani Khan Gauhar (Nizam ul Matabe, Hyderabad) | 125 | Posthumous print; derived from SJ |

Earlier literature reports 118 ghazals for BL and 123 for SJ. Physical collation gives 97 and 125. Provenance and codicological notes are on the site's *The Witnesses* page.

## Repository contents

```
├── index.html            Landing page
├── about.html            Historical context for Mah Laqa Bai
├── bibliography.html     Bibliography and links
├── gallery.html          Visual archive: paintings, architecture, inscriptions
├── sources.html          The four witnesses and their provenance
├── view.html             Interactive collation viewer
├── analysis.html         Computational analysis of the collation
├── about-project.html    Editorial method
├── downloads.html        Data downloads
│
├── data.js               The collation dataset
├── script.js             Table rendering and filtering
├── style.css             Shared styling
├── images/               Figures (NeighborNet networks, etc.)
│
├── _config.yml           GitHub Pages configuration
├── LICENSE               GNU GPL v3.0
└── README.md
```

The site is plain HTML, CSS and JavaScript with no build step.

## The data

### Structure

`data.js` holds one entry per couplet, aligned across the four witnesses:

```javascript
const deewanData = [
  {
    id: "1.1",
    BL: "...",
    TO: "...",
    SJ: "...",
    GM: "..."
  },
  // ...
];
```

Couplets are cited as `ghazal.couplet`: `5.2` is the second couplet of the fifth ghazal. Every ghazal has exactly five couplets, so the identifiers run from `1.1` to `125.5`, 625 in all, and each one is unique. BL and TO contain fewer ghazals than SJ and GM, so those two witnesses have no text for some identifiers.

### Transcription conventions

- Transcriptions were made directly from the manuscripts (BL, TO, SJ) and the lithograph (GM).
- Spelling variants that come only from scribal convention are standardised to one modern encoding per phoneme.
- Differences in vocabulary, morphology and syntax are kept exactly as written in each witness.
- Where a word is missing from the base text through a physical gap or scribal omission, it is restored from the other witnesses and **placed in square brackets**, for example `[لفظ]`.

### Handling the brackets

The brackets are kept in the data so you can decide how to treat them:

- **Default (used for every figure in the paper):** leave them in. A restored word then counts as a difference from the unrestored text.
- **Raw scribal layer:** strip the delimiters with a global regular expression removing `[` and `]`. The enclosed text then becomes part of the ordinary string.

## Reproducing the analysis

1. **Align** the witnesses couplet by couplet. Ghazals absent from a witness are left out of that witness's comparisons, so all statistics cover shared couplets only.
2. **Distance:** for each pair of couplets, compute normalised Levenshtein distance: the minimum number of single-character insertions, deletions and substitutions, divided by the length of the longer string.
3. **Matrix:** average the couplet distances for each pair of witnesses to get a symmetric 4×4 matrix over {BL, TO, SJ, GM}.
4. **Network:** build a NeighborNet from the matrix in SplitsTree4.
5. **Threshold:** "major change" is any distance above the 95th percentile of the pooled BL→TO and TO→SJ distances, which falls near 0.0429.
6. **Dakhni Retention Rate (DRR):** for a word *w* and a transition A→B,
   `DRR = (occurrences of w in B at the positions where it stood in A) ÷ (occurrences of w in A) × 100`.
   The tracked words are a hand-picked list of distinctively Dakhni forms.

### Headline results

| Transition | Unchanged | Minor | Major |
|---|---|---|---|
| BL → TO (1799–1811) | 92.8% | 5.8% | 1.4% |
| TO → SJ (1811–1818) | 69.4% | 22.4% | 8.2% |
| SJ → GM (1818–1906) | 26.8% | 23.1% | 50.2% |

In the four-witness network, GM sits on a branch roughly twelve times longer than the whole spread among the manuscripts.

## Running the site locally

No installation is needed. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000. The site uses Inter for English text and Noto Nastaliq Urdu for Urdu, both loaded from Google Fonts.

## Contributing

Corrections to transcriptions, newly found witnesses, alternative collation approaches and interface improvements are all welcome. Please [open an issue](https://github.com/sudoarsh/mahlaqa/issues) or send a pull request. For a transcription correction, include the couplet identifier and the witness.

## Licence

- **Code:** GNU General Public License v3.0 (see `LICENSE`).
- **Text and collation data:** Creative Commons Attribution 4.0 (CC BY 4.0).
- **Photographs** on the gallery page: CC BY 4.0. **Historical paintings and miniature reproductions:** public domain (CC0). Each gallery item links to its source on Wikimedia Commons.

## Citation

**Dataset**

```bibtex
@dataset{arsh_deewan_collation_2026,
  title  = {Collation Data of Deewan-e-Mah Laqa Chanda across Four Sources},
  author = {Arsh, Akash},
  year   = {2026},
  doi    = {10.5281/zenodo.20587114},
  url    = {https://doi.org/10.5281/zenodo.20587114}
}
```

**Paper**

Arsh, Akash. *Quantifying Corruption: Computational Analysis of Textual Transmission in the Diwan of Mah Laqa Bai Chanda.* Knowledge Commons. https://doi.org/10.17613/yq3e6-4pc82
