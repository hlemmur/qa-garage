import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

export interface TargetConfig {
  name?: string;
  targetUrl?: string;
  environment?: string;
  project?: string;
  notes?: string[];
}

export interface RuntimeConfig {
  rootDir: string;
  project: string;
  projectDir: string;
  targetUrl?: string;
  environment?: string;
  mockMode: boolean;
  configPath?: string;
}

interface TargetsFile {
  defaultProject?: string;
  targets?: Record<string, TargetConfig>;
}

function readTargetsFile(rootDir: string): { path?: string; contents?: TargetsFile } {
  const candidates = [
    path.join(rootDir, 'config', 'targets.yaml'),
    path.join(rootDir, 'config', 'targets.example.yaml')
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      const raw = readFileSync(candidate, 'utf8');
      return {
        path: candidate,
        contents: YAML.parse(raw) as TargetsFile
      };
    }
  }

  return {};
}

export function loadRuntimeConfig(rootDir = process.cwd()): RuntimeConfig {
  const { path: configPath, contents } = readTargetsFile(rootDir);
  const project = process.env.QA_PROJECT ?? contents?.defaultProject ?? '_template';
  const target = contents?.targets?.[project];

  return {
    rootDir,
    project,
    projectDir: path.join(rootDir, 'projects', project),
    targetUrl: process.env.TARGET_URL ?? target?.targetUrl,
    environment: process.env.QA_ENVIRONMENT ?? target?.environment,
    mockMode: process.env.MOCK_MODE === 'true',
    configPath
  };
}

export function formatTimestamp(date = new Date()): string {
  return date.toISOString().replace(/[:.]/g, '-');
}
