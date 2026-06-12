# Deewan of Mah Laqa Bai Chanda: Digital Collation Archive

A companion repository housing the complete collation dataset of four primary manuscript witnesses for Mah Laqa Bai Chanda's poetic works. This repository enables scholars to independently verify editorial decisions and conduct reproducible textual analysis.

**Live website**: https://sudoarsh.github.io/mahlaqa  
**Dataset DOI**: https://doi.org/10.5281/zenodo.20587114 *(Zenodo)*

## Overview

This repository contains:

- **Complete four-witness collation** (BL 1799, TO 1811, SJ 1818, GM 1906) as structured data
- **Interactive web interface** for comparing textual variants across all sources
- **Downloadable datasets** in multiple formats for computational analysis
- **Full transparency** of the editorial process and textual transmission history

The actual critical text, apparatus criticus with full notes, and editorial commentary are published separately in the physical critical edition. This digital archive serves as the **reproducible research foundation**, enabling scholars to:

- Verify editorial decisions against primary sources
- Conduct independent textual analysis
- Recheck variant collations
- Extract data for their own research

## The Four Witnesses

| Witness | Date | Source | Coverage |
|---------|------|--------|----------|
| **BL** | 1799 | British Library MS | 97 ghazals + Persian Dibacha |
| **TO** | 1811 | Telangana State Archives | 98 ghazals |
| **SJ** | 1818 | Salar Jung Library | 125 ghazals (base text) |
| **GM** | 1906 | Print Edition | 125 ghazals (editorial layer) |

## Repository Contents

```
├── index.html              # Project landing page
├── view.html              # Interactive collation viewer
├── sources.html           # Witness documentation & provenance
├── analysis.html          # Computational variant analysis
├── about.html             # Historical context for Mah Laqa
├── about-project.html     # Editorial methodology
├── downloads.html         # Data export options
│
├── data.js                # Complete collation dataset (JSON-like structure)
├── script.js              # Interactivity: table rendering, filtering
├── style.css              # Responsive styling
│
├── _config.yml            # GitHub Pages config
├── LICENSE                # GNU GPL v3.0
└── README.md              # This file
```

## Quick Start

1. **View online**: https://sudoarsh.github.io/mahlaqa
2. **Explore collation**: Click "Interactive Collation" to see all four witnesses side-by-side
3. **Toggle witnesses**: Show/hide specific sources to compare textual traditions
4. **Download data**: Export complete dataset via the Downloads page

No installation or build process required—static HTML/CSS/JavaScript.

## Using the Collation Data

### Interactive Web Interface

- **Side-by-side comparison** of all four witnesses
- **Real-time filtering**: Toggle witnesses on/off to focus on specific textual traditions
- **Hover contextual info**: See manuscript provenance and archival details
- **Mobile responsive**: Works on all devices

### Programmatic Access

The complete collation is available in `data.js` as a structured array:

```javascript
const deewanData = [
    {
        id: "1.1",
        BL: "متن برائے شاہد اول",
        TO: "متن برائے شاہد دوم",
        SJ: "متن برائے شاہد سوم (base text)",
        GM: "متن برائے شاہد چہارم"
    },
    // ... 125+ entries covering complete corpus
];
```

Each entry represents a poetic unit with parallel texts from all sources, enabling:
- Variant frequency analysis
- Textual genealogy studies
- Pattern detection across transmission stages
- Independent verification of editorial selections

### Data Export

Visit the Downloads page to access:
- Raw `data.js` file
- JSON/CSV exports
- Metadata and collation indices
- Downloadable analysis results
- Complete dataset on Zenodo (with persistent DOI)

## Reproducibility & Verification

This repository supports scholarly reproducibility by:

1. **Publishing all source texts** exactly as they appear in manuscripts
2. **Providing structured data** suitable for computational analysis
3. **Documenting all four witnesses** with archival provenance
4. **Enabling independent collation** of published editorial conclusions
5. **Supporting open verification** of textual decisions
6. **Archiving on Zenodo** for long-term preservation and citation

Scholars using the published critical edition can:
- Cross-check every editorial decision against the primary sources
- Conduct alternative collation strategies
- Extract specific variant patterns
- Build derivative analyses on the same foundation
- Cite the dataset with the persistent Zenodo DOI

## Technical Details

- **Static site**: No backend server required
- **Technologies**: HTML5, CSS3, vanilla JavaScript
- **Fonts**: Inter (English UI), Noto Nastaliq Urdu (Urdu text)
- **Responsive**: Mobile-optimized across all screen sizes
- **Accessibility**: Semantic HTML, keyboard navigation, ARIA labels
- **Hosting**: GitHub Pages
- **Data Preservation**: Zenodo archive with DOI

## How Editorial Conclusions Map to This Data

The published critical edition:
- Selects the 1818 Salar Jung manuscript as the base text
- Documents significant variants in the apparatus criticus
- Provides contextual notes on textual transmission
- Explains editorial rationale for variant selection

Scholars can verify these conclusions by:
1. Visiting https://sudoarsh.github.io/mahlaqa
2. Comparing the SJ (base text) against BL, TO, and GM
3. Identifying the same variants documented in the printed apparatus
4. Assessing whether alternative editorial choices were justified
5. Potentially proposing different base texts or collation strategies

## Contributing

This is an open research archive. We welcome:
- Corrections to transcriptions
- Additional witness discovery
- Alternative collation analyses
- Computational studies
- Interface improvements

Please [open an issue](https://github.com/sudoarsh/mahlaqa/issues) or submit a pull request.

## License

GNU General Public License v3.0. All code and collation data are freely available for academic research and reuse.

## Citation

For this digital collation archive, cite as:

**BibTeX:**
```bibtex
@dataset{tiwari_deewan_collation_2026,
  title={Deewan of {M}ah {L}aqa {B}ai {C}handa: {D}igital {C}ollation {A}rchive},
  author={Tiwari, Akash},
  url={https://github.com/sudoarsh/mahlaqa},
  doi={10.5281/zenodo.20587114},
  year={2026}
}
```

**APA:**
```
Tiwari, A. (2026). Deewan of Mah Laqa Bai Chanda: Digital collation archive [Data set]. 
https://doi.org/10.5281/zenodo.20587114
```

For the complete critical edition with apparatus criticus and editorial notes, see the published physical edition.

## Related Resources

- **Published Critical Edition**: [Details on publication, ISBN, etc.]
- **The Witnesses**: See the "The Witnesses" page for archival holding information
- **Bibliography**: See the "About Mah Laqa" page for scholarly context
- **Dataset on Zenodo**: https://zenodo.org/records/20587114

## Support

For questions about the collation data or reproducibility:
- [Open an issue](https://github.com/sudoarsh/mahlaqa/issues)
- Email: [contact information]

---

**Last Updated**: June 2026  
**Repository**: https://github.com/sudoarsh/mahlaqa  
**Live Site**: https://sudoarsh.github.io/mahlaqa  
**Dataset DOI**: https://doi.org/10.5281/zenodo.20587114  
**Project**: Deewan of Mah Laqa Bai Chanda (Critical Edition Companion)  
**License**: GNU General Public License v3.0
