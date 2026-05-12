import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "CIPHERQ",
    category: "AI Drug Repurposing Platform · Solix Technologies",
    description:
      "Production-grade drug repurposing pipeline integrating protein–ligand docking (AutoDock Vina), ensemble ML scoring (Random Forest + Gradient Boosting, 87–94% accuracy), and ADME/PBPK pharmacokinetic modeling. Screened 5,000+ drug–target pairs in PostgreSQL; built a BioCypher knowledge graph linking drugs, targets, and diseases via PubMed, ClinicalTrials.gov, PDB, and ChEMBL APIs; delivered 3D molecular visualization dashboards with Streamlit, Plotly, and Py3Dmol.",
    tags: ["AutoDock Vina", "BioCypher", "Random Forest", "ADME/PBPK", "PostgreSQL", "Streamlit", "Python"],
    image: "/images/cipherq.png",
    link: "https://github.com/soumithbabburi",
  },
  {
    title: "POZ Platform",
    category: "Enterprise 505(b)(2) Drug Screening Platform · Solix Technologies",
    description:
      "Built for Serina Therapeutics — an enterprise drug screening platform that searches 2.4M ChEMBL 33 compounds against a 3-model ensemble ML pipeline (R²=0.707, 88% therapeutic window accuracy). Features InterpretML EBM glassbox scoring for regulatory transparency, a Three.js interactive 3D organ PK heatmap, FDA FAERS adverse-event analyzer, and Groq LLM-generated out-licensing reports — all served via Flask/PostgreSQL with real-time compound ranking.",
    tags: ["ChEMBL 33", "InterpretML EBM", "Flask", "PostgreSQL", "Three.js", "RDKit", "Groq LLM", "Python"],
    image: "/images/poz-platform.png",
    link: "https://github.com/soumithbabburi",
  },
  {
    title: "SimuTissue",
    category: "Spatial Transcriptomics Intelligence Platform · Solix Technologies",
    description:
      "End-to-end spatial transcriptomics platform that ingests .h5ad and 10x Visium files for FFPE tissue denoising, spatially-resolved cell-type deconvolution, cell–cell interaction mapping, and drug response prediction. Built on FastAPI + React with a Dockerized microservices backend; leverages PyTorch/Geneformer and scGPT for foundation-model-based cell embeddings, AnnData/Scanpy for preprocessing, and PostgreSQL for experiment persistence.",
    tags: ["FastAPI", "React", "PyTorch", "Geneformer", "AnnData", "Scanpy", "Docker", "PostgreSQL"],
    image: "/images/simutissue.png",
    link: "https://github.com/soumithbabburi",
  },
  {
    title: "scRNA-seq Biomarker Discovery",
    category: "Single-Cell Transcriptomics · Autoimmune Research · Indiana University",
    description:
      "End-to-end scRNA-seq pipeline on patient cohort data to identify disease-specific immune subpopulations in autoimmune disorders, achieving 25% increase in novel subpopulation detection. Applied Seurat and Scanpy for ambient RNA correction, graph-based clustering, and UMAP dimensionality reduction, followed by differential expression (Wilcoxon + DESeq2). Conducted pathway enrichment via clusterProfiler, KEGG, and STRING PPI network analysis to prioritize therapeutic targets.",
    tags: ["Seurat (R)", "Scanpy", "UMAP", "DESeq2", "clusterProfiler", "KEGG", "STRING", "Python / R"],
    image: "/images/scrna-seq.png",
    link: "https://github.com/soumithbabburi",
  },
  {
    title: "Clinical EMR Platform",
    category: "HIPAA-Compliant Full-Stack EHR System · GTechnologies",
    description:
      "Designed and built a full-stack Electronic Medical Records system from the ground up, reducing manual record retrieval latency by 40%. Implemented 15+ RESTful API endpoints for patient registration, appointment scheduling, diagnosis management, lab reporting, and medication tracking. Built a normalized MySQL schema with role-based access control and delivered a responsive React.js frontend with real-time provider dashboards — all under HIPAA compliance.",
    tags: ["React.js", "Node.js / Express", "MySQL", "REST APIs", "HIPAA", "JWT Auth", "TypeScript"],
    image: "/images/emr-system.png",
    link: "https://github.com/soumithbabburi",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tags">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="carousel-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
