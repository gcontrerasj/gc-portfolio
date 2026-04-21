export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Geospatial Data Engineer',
    company: 'Tytl',
    period: 'Apr 2021 – Present',
    current: true,
    bullets: [
      'Built and maintained 100+ data pipelines across AWS EMR, ECS Fargate, Athena, Glue, and Apache Airflow',
      'Modernised geospatial pipelines with Apache Sedona and PySpark, significantly reducing processing times',
      'Supported architecture of cloud infrastructure using Terraform; managed Docker deployments on ECS Fargate',
    ],
  },
  {
    role: 'Database Technician — Endangered Archaeology',
    company: 'University of Oxford (EAMENA)',
    period: 'Jul 2020 – Feb 2021',
    current: false,
    bullets: [
      'Developed database solutions on the Arches OSS platform using PostgreSQL/PostGIS and JavaScript',
      'Provided GIS and IT support with GeoServer, QGIS, and PostGIS',
    ],
  },
  {
    role: 'Data Asset Technician',
    company: 'SSE plc',
    period: 'Mar 2020 – Jul 2020',
    current: false,
    bullets: [
      'Maintained GIS data quality standards and managed database integration between legacy and new systems',
    ],
  },
  {
    role: 'GIS Analyst / Technician',
    company: 'Self-employed',
    period: 'Jun 2018 – Jul 2019',
    current: false,
    bullets: [
      'Delivered geospatial consultancy — ArcPy automation, QGIS, FME, and geospatial strategy for an agricultural cooperative',
    ],
  },
  {
    role: 'Mapping Technician',
    company: 'Verisk Analytics',
    period: 'Jun 2017 – Jun 2018',
    current: false,
    bullets: [
      'Contributed to the UK Building high-profile project — land change analysis, 3D GIS modelling, and database import via QGIS and FME',
    ],
  },
  {
    role: 'Senior GIS Technician / QA',
    company: 'Cyient (Rural Payments Agency)',
    period: 'May 2014 – Jun 2017',
    current: false,
    bullets: [
      'Led team strategy and methodology; trained new staff on ArcGIS and eSpatial; achieved 99% QA pass rate',
    ],
  },
];
