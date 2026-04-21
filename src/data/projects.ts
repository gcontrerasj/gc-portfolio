export interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: 'sky' | 'indigo' | 'lime' | 'orange';
}

export const projects: Project[] = [
  {
    title: 'Land Registry Data Platform',
    description:
      'Ingesting, transforming and publishing UK property ownership, title, and land data at scale — sourced from the HM Land Registry.',
    tags: ['HMLR', 'PostgreSQL', 'AWS S3', 'pandas'],
    accent: 'sky',
  },
  {
    title: 'Airflow Orchestration Platform',
    description:
      'AWS ECS Fargate-hosted Apache Airflow instance managing dozens of scheduled data pipelines, with DAG synchronisation via AWS DataSync and EFS.',
    tags: ['Apache Airflow', 'ECS Fargate', 'Terraform', 'RDS'],
    accent: 'indigo',
  },
  {
    title: 'Geospatial Pipeline Suite',
    description:
      'Raster and vector processing pipelines for property-level spatial analysis, zonal statistics, and automated map layer generation at national scale.',
    tags: ['GDAL', 'GeoPandas', 'Rasterio', 'PostGIS'],
    accent: 'lime',
  },
  {
    title: 'Land Report Generator',
    description:
      'Fully serverless Step Functions workflow: Athena queries land data → Lambda transforms → ECS bundles results → CloudFront delivers signed PDF reports.',
    tags: ['Step Functions', 'Athena', 'Lambda', 'CloudFront'],
    accent: 'orange',
  },
  {
    title: 'Material Information Pipeline',
    description:
      'Multi-stage pipeline processing land and property attributes across six build steps to produce compliance-ready structured data outputs.',
    tags: ['PostgreSQL', 'pandas', 'boto3', 'AWS S3'],
    accent: 'sky',
  },
  {
    title: 'Planning Data Pipeline',
    description:
      'Ingesting and transforming UK planning application data from multiple sources, integrating Google Cloud Storage and AWS for distributed processing.',
    tags: ['polars', 'GCS', 'AWS S3', 'PostgreSQL'],
    accent: 'indigo',
  },
  {
    title: 'GIS Mapping API',
    description:
      'TypeScript/Node.js REST API serving geospatial and land registry data to web mapping clients, deployed on ECS Fargate behind a Network Load Balancer.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'ECS'],
    accent: 'lime',
  },
  {
    title: 'Vector Tile Generation',
    description:
      'Automated Tippecanoe pipeline containerised in Docker, producing Mapbox-compatible PMTiles from large geospatial datasets stored in S3.',
    tags: ['Tippecanoe', 'Docker', 'Mapbox', 'AWS S3'],
    accent: 'orange',
  },
];
