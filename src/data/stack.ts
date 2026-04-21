export interface StackCategory {
  name: string;
  color: 'sky' | 'orange' | 'lime' | 'fuchsia';
  tools: string[];
}

export const stack: StackCategory[] = [
  {
    name: 'Data Processing',
    color: 'sky',
    tools: ['Python', 'pandas', 'polars', 'PySpark', 'PyArrow'],
  },
  {
    name: 'Cloud / AWS',
    color: 'orange',
    tools: [
      'S3', 'EMR', 'ECS Fargate', 'Lambda', 'Step Functions',
      'Athena', 'Glue', 'RDS',
    ],
  },
  {
    name: 'Orchestration',
    color: 'fuchsia',
    tools: ['Apache Airflow', 'Jupyter Notebook'],
  },
  {
    name: 'Geospatial',
    color: 'lime',
    tools: [
      'GeoPandas', 'Shapely', 'GDAL', 'Rasterio', 'PostGIS',
      'Apache Sedona', 'Tippecanoe', 'Mapbox', 'QGIS', 'ArcGIS', 'FME', 'GeoServer',
    ],
  },
  {
    name: 'Databases',
    color: 'sky',
    tools: ['PostgreSQL', 'DuckDB', 'SQLite', 'SQLAlchemy'],
  },
  {
    name: 'IaC / DevOps',
    color: 'fuchsia',
    tools: ['Docker', 'GitHub Actions', 'ECR', 'Bash'],
  },
  {
    name: 'APIs & Tooling',
    color: 'sky',
    tools: ['REST APIs', 'FastAPI', 'TypeScript', 'Postman', 'JSON', 'OpenAPI'],
  },
];
