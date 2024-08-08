/**
 * @title Preenchimento lateral
 * @description Cada unidade equivale a 4 pixels
 * @default 0
 */
export interface PaddingInlineProps {
  desktop: 0 | 1 | 2 | 3 | 4 | 5;
  mobile: 0 | 1 | 2 | 3 | 4 | 5;
}

/**
 * @title Espaçamento do topo
 * @description Cada unidade equivale a 4 pixels
 * @default 0
 */
export interface MarginTopProps {
  desktop: 0 | 2 | 4 | 6 | 8 | 10;
  mobile: 0 | 2 | 4 | 6 | 8 | 10;
}

/**
 * @title Preenchimento do topo
 * @description Cada unidade equivale a 4 pixels
 * @default 0
 */
export interface PaddingTopProps {
  desktop: 0 | 1 | 2 | 3 | 4 | 5;
  mobile: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface GapProps {
  gap: 1 | 2 | 3 | 4 | 5;
}
