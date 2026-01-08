import docsimImg from '../../images/docsim.png';
import doxtractImg from '../../images/doxtract.png';
import docpilotImg from '../../images/docpilot.png';
import { Layers, Zap, FileSearch } from 'lucide-react';

export const productsData = [
    {
        id: 'docsim',
        buttonLabel: 'DocSim',
        title: 'AI-Powered Document Similarity Engine',
        features: [
            'Detects near-duplicates and tampered documents.',
            'Identifies fraudulent patterns across large repositories.',
            'Multi-language support for global adaptability.'
        ],
        benefits: ['Save 30% time on manual checks.', 'Reduce document fraud by up to 40%.'],
        icon: Layers,
        layout: 'left',
        visualColor: 'from-blue-600 to-cyan-500',
        image: docsimImg
    },
    {
        id: 'docpilot',
        buttonLabel: 'DocPilot',
        title: 'Streamline Document Workflows with Automation',
        features: [
            'Automates document collection, routing, and task assignments.',
            'Real-time tracking with advanced dashboards.',
            'Seamless integration with enterprise systems via APIs.'
        ],
        benefits: ['Reduce turnaround times by 50%.','Improve operational efficiency with minimal manual effort'],
        icon: Zap,
        layout: 'right',
        visualColor: 'from-purple-600 to-blue-600',
        image: docpilotImg
    },
    {
        id: 'doxtract',
        buttonLabel: 'Doxtract',
        title: 'Extract, Validate, and Process Documents',
        features: [
            'OCR and NLP-based data extraction.',
            'Handles unstructured documents.',
            'Validates fields using external sources.'
        ],
        benefits: ['Process 10,000+ documents in minutes.', 'Achieve 99% data accuracy with AI-driven validation.'],
        icon: FileSearch,
        layout: 'left',
        visualColor: 'from-orange-500 to-red-500',
        image: doxtractImg
    }
];
