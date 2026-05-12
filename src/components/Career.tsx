import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Programmer</h4>
                <h5>Solix Technologies · Dallas, TX</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected CIPHERQ, an end-to-end AI drug repurposing platform
              integrating molecular docking (Autodock Vina), ensemble ML models
              (87–94% accuracy), ADME/PBPK workflows, and biomedical knowledge
              graphs (BioCypher). Built automated pipelines connecting PubMed,
              ClinicalTrials.gov, PDB, and ChEMBL APIs; delivered 3D molecular
              dashboards with Streamlit, Plotly, and Py3Dmol.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>GTechnologies · Indianapolis, IN</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Designed a full-stack Electronic Medical Records system (React.js,
              Node.js/Express, MySQL) reducing manual retrieval time by 40%.
              Built RESTful APIs for clinical workflows, responsive dashboards,
              and end-to-end testing and deployment documentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bioinformatics Analyst</h4>
                <h5>Indiana University · Indianapolis, IN</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Performed scRNA-seq analysis to identify disease-specific
              biomarkers in autoimmune disorders — increasing novel cell
              subpopulation detection by 25%. Applied Seurat and Scanpy for
              clustering, UMAP, and differential expression; produced pathway
              enrichment reports using Cytoscape, STRING, and KEGG.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bioinformatics Research Assistant</h4>
                <h5>Indiana University · Indianapolis, IN</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Optimized CRISPR-Cas13 transcriptome editing with CASowary and
              custom Python scripts, improving gRNA targeting specificity.
              Performed RNA-seq analysis using DESeq2 and StringTie; correlated
              gRNA efficiency with expression data to minimize off-target hits.
            </p>
          </div>
        </div>

        <div className="accomplishments-section">
          <h3>Accomplishments</h3>
          <div className="accomplishments-grid">
            <div className="accomplishment-card">
              <div className="acc-year">2023</div>
              <h4>Poster Presenter — Midwest Symposium on Oligonucleotide Therapeutics</h4>
              <p>Presented transcriptome-wide CRISPR-Cas off-target profiling using RNA sequencing and bioinformatics pipelines to 50+ academic and industry experts.</p>
            </div>
            <div className="accomplishment-card">
              <div className="acc-year">2019</div>
              <h4>1st Place — Poster, World Pharmacists Day</h4>
              <p>Recognized for "Nanobots: A Novel Drug Delivery System" — top submission among 20+ entries showcasing targeted drug delivery innovations.</p>
            </div>
            <div className="accomplishment-card">
              <div className="acc-year">2019</div>
              <h4>1st Place — Debate, National Pharmacy Week</h4>
              <p>Awarded for a winning argument on Conventional vs. Modern Teaching Methodologies, demonstrating advanced critical thinking and communication.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
