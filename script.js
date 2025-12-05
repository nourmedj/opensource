const projects = [

  /* =============================================================
     20 REAL OPEN SOURCE PROJECTS 
  ============================================================= */

  {
    name: "Android FHIR",
    link: "https://google.github.io/android-fhir/",
    license: "Apache 2.0",
    category: "Health",
    fields: "Digital Health, HL7 FHIR, Mobile Health",
    description:
      "Google's Android toolkit for building offline-capable FHIR-based healthcare applications.",
    contribute: "https://github.com/google/android-fhir"
  },

  {
    name: "TensorFlow",
    link: "https://www.tensorflow.org",
    license: "Apache 2.0",
    category: "AI",
    fields: "Machine Learning, Deep Learning",
    description: "Open-source machine learning library for scalable model development.",
    contribute: "https://github.com/tensorflow/tensorflow"
  },

  {
    name: "PyTorch",
    link: "https://pytorch.org",
    license: "BSD",
    category: "AI",
    fields: "ML, Deep Learning, Neural Networks",
    description: "Powerful deep learning framework developed by Meta AI.",
    contribute: "https://github.com/pytorch/pytorch"
  },

  {
    name: "React",
    link: "https://react.dev",
    license: "MIT",
    category: "Web",
    fields: "Frontend Development",
    description: "Popular JavaScript library for building modern UI interfaces.",
    contribute: "https://github.com/facebook/react"
  },

  {
    name: "Vue.js",
    link: "https://vuejs.org",
    license: "MIT",
    category: "Web",
    fields: "Frontend Development",
    description: "Progressive framework for building interactive user interfaces.",
    contribute: "https://github.com/vuejs/vue"
  },

  {
    name: "Django",
    link: "https://www.djangoproject.com",
    license: "BSD",
    category: "Web",
    fields: "Backend, Web Development",
    description: "Python web framework for secure, fast, scalable applications.",
    contribute: "https://github.com/django/django"
  },

  {
    name: "FastAPI",
    link: "https://fastapi.tiangolo.com",
    license: "MIT",
    category: "Web",
    fields: "Backend APIs",
    description: "High-performance Python backend framework for APIs.",
    contribute: "https://github.com/tiangolo/fastapi"
  },

  {
    name: "Flutter",
    link: "https://flutter.dev",
    license: "BSD",
    category: "Mobile",
    fields: "Cross-platform Mobile Apps",
    description: "UI toolkit from Google for building mobile, web, and desktop apps.",
    contribute: "https://github.com/flutter/flutter"
  },

  {
    name: "Kubernetes",
    link: "https://kubernetes.io",
    license: "Apache 2.0",
    category: "Systems",
    fields: "Cloud Computing, Container Orchestration",
    description: "System for automating deployment, scaling, and management of containers.",
    contribute: "https://github.com/kubernetes/kubernetes"
  },

  {
    name: "Linux Kernel",
    link: "https://kernel.org",
    license: "GPLv2",
    category: "Systems",
    fields: "Operating Systems",
    description: "World's most widely used open-source operating system kernel.",
    contribute: "https://github.com/torvalds/linux"
  },

  {
    name: "OpenCV",
    link: "https://opencv.org",
    license: "BSD",
    category: "AI",
    fields: "Computer Vision",
    description: "Toolkit for image processing and computer vision applications.",
    contribute: "https://github.com/opencv/opencv"
  },

  {
    name: "Scikit-learn",
    link: "https://scikit-learn.org",
    license: "BSD",
    category: "AI",
    fields: "Machine Learning",
    description: "Machine learning tools for Python, including training & data processing.",
    contribute: "https://github.com/scikit-learn/scikit-learn"
  },

  {
    name: "Bootstrap",
    link: "https://getbootstrap.com",
    license: "MIT",
    category: "Web",
    fields: "CSS Framework",
    description: "Popular responsive CSS framework.",
    contribute: "https://github.com/twbs/bootstrap"
  },

  {
    name: "Tailwind",
    link: "https://tailwindcss.com",
    license: "MIT",
    category: "Web",
    fields: "Utility-first CSS",
    description: "CSS framework for highly customizable UI.",
    contribute: "https://github.com/tailwindlabs/tailwindcss"
  },

  {
    name: "Electron",
    link: "https://electronjs.org",
    license: "MIT",
    category: "Systems",
    fields: "Desktop Apps, JS Framework",
    description: "Build cross-platform desktop apps using web technologies.",
    contribute: "https://github.com/electron/electron"
  },

  {
    name: "Godot",
    link: "https://godotengine.org",
    license: "MIT",
    category: "Systems",
    fields: "Game Development",
    description: "Lightweight open-source game engine.",
    contribute: "https://github.com/godotengine/godot"
  },

  {
    name: "NumPy",
    link: "https://numpy.org",
    license: "BSD",
    category: "AI",
    fields: "Scientific Computing",
    description: "Python’s core library for numerical operations.",
    contribute: "https://github.com/numpy/numpy"
  },

  {
    name: "OpenSSL",
    link: "https://www.openssl.org",
    license: "Apache",
    category: "Systems",
    fields: "Cryptography, Security",
    description: "Toolkit for SSL/TLS and cryptographic primitives.",
    contribute: "https://github.com/openssl/openssl"
  },

  {
    name: "Node.js",
    link: "https://nodejs.org",
    license: "MIT",
    category: "Systems",
    fields: "Backend, JavaScript Runtime",
    description: "JavaScript runtime built on Chrome V8.",
    contribute: "https://github.com/nodejs/node"
  },

  {
    name: "Blender",
    link: "https://blender.org",
    license: "GPL",
    category: "Systems",
    fields: "3D Modeling, Animation",
    description: "Industry-grade 3D modeling and VFX suite.",
    contribute: "https://github.com/blender/blender"
  }

];

/* =============================================================
   RENDER CARDS
============================================================= */
const container = document.getElementById("projects");

function renderProjects(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p><strong>License:</strong> ${p.license}</p>
        <p><strong>Field:</strong> ${p.fields}</p>
        <p><strong>Description:</strong> ${p.description}</p>
        <p><strong>Contribute:</strong> <a href="${p.contribute}" target="_blank">GitHub Repo</a></p>
        <p><a href="${p.link}" target="_blank">Project Website</a></p>
      </div>
    `;
  });
}

renderProjects(projects);

/* =============================================================
   SEARCH + FILTER
============================================================= */

document.getElementById("searchInput").addEventListener("input", e => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = projects.filter(p =>
    p.name.toLowerCase().includes(searchTerm) ||
    p.fields.toLowerCase().includes(searchTerm)
  );
  renderProjects(filtered);
});

document.querySelectorAll(".filter-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;

    if (cat === "all") renderProjects(projects);
    else {
      const filtered = projects.filter(p => p.category === cat);
      renderProjects(filtered);
    }
  })
);
