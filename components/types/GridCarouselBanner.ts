import { ImageWidget } from "apps/admin/widgets.ts";
import {
  MarginTopProps,
  PaddingInlineProps,
  PaddingTopProps,
} from "../../types/userLayoutProps.ts";

/** @title {{alt}} */
export interface BannerProps {
  /**
   * @title Imagem
   */
  image: ImageWidget;
  /**
   * @title Largura
   */
  width: number;
  /**
   * @title Altura
   */
  height: number;
  /**
   * @title Texto alternativo da imagem
   */
  alt: string;
  /**
   * @title Link
   * @description Se houver redirecionamento, insira o caminho
   */
  href?: string;
  /**
   * @title Título do texto
   */
  title?: string;
}

/** @title Uma Imagem */
export interface OneImageProps {
  /**
   * @description Essa imagem ocupará 100% da largura do conteúdo.
   */
  images: BannerProps;
  /**
   * @title Selecione o formato de exibição da grade:
   * @readOnly
   */
  gridPosition: "1";
}

/** @title Duas Imagens */
export interface TwoImageProps {
  /**
   * @description Essas imagens poderão receber formatos diferentes de layout. Cada Linha terá QUATRO colunas, portanto a divisão será feita pela quantidade de colunas que as imagens poderão ocupar.
   * @minItems 2
   * @maxItems 2
   */
  images: BannerProps[];
  /**
   * @title Selecione o formato de exibição da grade:
   */
  gridPosition: "3-1" | "2-2" | "1-3";
}

/** @title Três Imagens */
export interface ThreeImageProps {
  /**
   * @description Essas imagens poderão receber formatos diferentes de layout. Cada Linha terá QUATRO colunas, portanto a divisão será feita pela quantidade de colunas que as imagens poderão ocupar.
   * @minItems 3
   * @maxItems 3
   */
  images: BannerProps[];
  /**
   * @title Selecione o formato de exibição da grade:
   */
  gridPosition: "1-1-1" | "1-2-1" | "2-1-1" | "1-1-2";
}

/** @title Quatro Imagens */
export interface FourImageProps {
  /**
   * @description Essas imagens poderão receber formatos diferentes de layout. Cada Linha terá QUATRO colunas, portanto a divisão será feita pela quantidade de colunas que as imagens poderão ocupar.
   * @minItems 4
   * @maxItems 4
   */
  images: BannerProps[];
  /**
   * @title Selecione o formato de exibição da grade:
   * @readOnly
   */
  gridPosition: "1-1-1-1";
}

/** @title Linha da Grade */
export interface GridLayoutsProps {
  gridLayout: OneImageProps | TwoImageProps | ThreeImageProps | FourImageProps;
}

export interface GridCarouselBannerProps {
  /**
   * @title Grade de Imagens
   * @description Essas imagens são para a grade no DESKTOP
   */
  gridLine: GridLayoutsProps[];
  /**
   * @title Imagens do Carrossel
   * @description Essas imagens são para o carrossel no MOBILE
   */
  imagesForCarousel: BannerProps[];
  /**
   * @title Cor de Background da sessão
   * @format color-input
   */
  "sectionBgColor"?: string;
  /**
   * @title Preenchimento do topo
   * @description Cada unidade equivale a 4 pixels
   * @default 0
   */
  paddingTop: PaddingTopProps;
  /**
   * @title Espaçamento do topo
   * @description Cada unidade equivale a 4 pixels
   * @default 0
   */
  marginTop: MarginTopProps;
  /**
   * @title Preenchimento lateral
   * @description Cada unidade equivale a 4 pixels
   * @default 0
   */
  paddingInline: PaddingInlineProps;
  /**
   * @title Mostrar Dots no mobile?
   * @default false
   */
  showDots: boolean;
  /**
   * @title Mostrar setas no mobile?
   * @default false
   */
  showArrows: boolean;
  /**
   * @title Tema escuro?
   * @default false
   */
  darkTheme: boolean;
}
