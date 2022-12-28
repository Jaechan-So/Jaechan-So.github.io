declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcesesEnv {
    DEBUG: string;
  }
}
