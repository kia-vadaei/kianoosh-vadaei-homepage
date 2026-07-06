export const publications = [
  {
    title: 'From Scenes to Semantics: PersianCLEVR for Bilingual 3D Visual Reasoning',
    venue: '1st Workshop on VLM4RWD@ NeurIPS 2025',
    note: 'Co-First Author',
    category: 'multimodal',
    authors:
      'Kianoosh Vadaei, Melika Shirian, Arshia Hemmat, Mohammad Hassan Heydari, Ali Mamanpoosh, Afsaneh Fatemi',
    abstract:
      'PersianCLEVR introduces a bilingual English and Persian benchmark for evaluating 3D visual reasoning in vision-language models, focusing on attributes, counting, spatial relations, comparison, and compositional logic.',
    // badges: ['3D VQA', 'Multimodal', 'Benchmark', 'Persian/English'],
    badges: [],
    links: [
      {
        label: 'OpenReview',
        href: 'https://openreview.net/forum?id=nolwmoU43R'
      },
      {
        label: 'Dataset: PersianClevr',
        href: 'https://huggingface.co/datasets/PrismaticLab/PersianClevr',
        featured: true
      }
    ]
  },
  {
    title: 'Adaptive Chunking for VideoRAG Pipelines with a Newly Gathered Bilingual Educational Dataset',
    venue: 'CSICC 2025, 29th International Computer Conference, Computer Society of Iran, Tehran',
    note: 'Co-First Author',
    category: 'rag',
    authors:
      'Arshia Hemmat, Kianoosh Vadaei, Melika Shirian, Mohammad Hassan Heydari, Afsaneh Fatemi',
    abstract:
      'This work proposes an adaptive chunking method for lecture VideoRAG using visual and transcript signals, alongside EduViQA, a bilingual educational video QA dataset for controlled retrieval evaluation.',
    // badges: ['VideoQA', 'RAG', 'Multimodal', 'EduViQA'],
    badges: [],
    links: [
      {
        label: 'IEEE Xplore',
        href: 'https://ieeexplore.ieee.org/abstract/document/10967455'
      },
      {
        label: 'Dataset: EduViQA',
        href: 'https://huggingface.co/datasets/UIAIC/EduViQA',
        featured: true
      }
    ]
  },

  {
    title: 'PrismSSL: One Interface, Many Modalities; A Single-Interface Library for Multimodal Self-Supervised Learning',
    venue: 'arXiv preprint, 2025',
    note: 'Author',
    category: 'ssl',
    authors:
      'Melika Shirian, Kianoosh Vadaei, Kian Majlessi, Audrina Ebrahimi, Arshia Hemmat, Peyman Adibi, Hossein Karshenas',
    abstract:
      'PrismSSL is a unified Python library for self-supervised learning on audio, images, graphs, and multimodal data. It includes modular training tools, Hugging Face support, and distributed training.',
    // badges: ['Self-Supervised Learning', 'Multimodal', 'Python Library', 'PyTorch', 'HuggingFace'],
    badges: [],
    links: [
      {
        label: 'ArXiv',
        href: 'https://arxiv.org/abs/2511.17776'
      },
      // {
      //   label: 'GitHub',
      //   href: 'https://github.com/PrismaticLab/PrismSSL',
      //   featured: true
      // },
      {
        label: 'Project Website',
        href: 'https://prismaticlab.github.io/PrismSSL/',
        featured: true
      }
    ]
  },

  {
    title: 'Leveraging Retrieval-Augmented Generation for Persian University Knowledge Retrieval',
    venue: '2024 15th International Conference on Information and Knowledge Technology, IKT',
    note: 'Co-First Author',
    category: 'rag',
    authors:
      'Arshia Hemmat, Kianoosh Vadaei, Mohammad Hassan Heydari, Afsaneh Fatemi',
    abstract:
      'This paper explores Retrieval-Augmented Generation for Persian university knowledge retrieval, improving access to educational information through Persian-focused datasets and retrieval pipelines.',
    // badges: ['RAG', 'Persian LLMs', 'Knowledge Retrieval', 'Dataset'],
    badges: [],
    links: [
      {
        label: 'ArXiv',
        href: 'https://arxiv.org/abs/2411.06237'
      },
      {
        label: 'Dataset: UQB',
        href: 'https://huggingface.co/datasets/UIAIC/UQB',
        featured: true
      }
    ]
  }
]

export const publicationFilters = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'SSL',
    value: 'ssl'
  },
  {
    label: 'RAG',
    value: 'rag'
  },
  {
    label: 'Multimodal',
    value: 'multimodal'
  }
]