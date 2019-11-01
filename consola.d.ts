/**
 * @field length = 8192
 *        512 * 16
 */
type Escenas = Uint8Array;

/** @todo rename this class */
export class FileType_VTTX_V1 {
  escenas: Escenas;
  /**
   * clamped to `[3, 2**31 - 1]`
   * @default 100 * .01 sec
  */
  duracion: Number;
  /**
   * clamped to `[3, this.duracion]`
   * @default 50 * .01 sec
  */
  animationDuracion: Number;
  constructor();
  constructor(
    escenas: Escenas,
    duracion: Number,
    animationDuracion: Number);
}

/** @todo expose this class */
export class GrupoDeCanales_Info {
  Nombre: String;
  // [1, 512 * 16]
  Canales: Array<Number>;
  // [0, 255]
  Valor: number;
}

/** TS only */
declare class FileManager_ConsolaProxy {
  /** @todo expose this method */
  readonly filename: String;
  /** @todo expose this method */
  readonly isMod: boolean;
  /** @todo expose this method */
  save(): boolean;

  /**
   * Retrieves the number of available DMX Universes
   * @constant 16
   */
  readonly MaxDMX: Number;
  /** Is same to `this.getEscenaAt(this.currEscena)` */
  get escena(): FileType_VTTX_V1;

  /** Is same to `this.setEscenaAt(this.currEscena, escena_)` */
  set escena(escena_: FileType_VTTX_V1);

  /**
   * Gets a copy of the Escena pointed by `index`
   * @todo implement indexed access like an array
  */
  getEscenaAt(index: Number): FileType_VTTX_V1;
  /** Set the Escena marked by `index` */
  setEscenaAt(index: Number, dmxData: FileType_VTTX_V1);

  /** Similar to index */
  get currEscena(): Number;
  set currEscena(currEscena_: Number);

  /** Similar to the `length` method of an array */
  get totalEscena(): Number;
  /** @todo expose this method */
  set totalEscena(totalEscena_: Number);

  /**
   * Remove the Escena pointed by `index`
   *
   * @param index position to remove, range: `[0, this.totalEscena - 1]`,
   * if is `undefined` remove the current Escena
  */
  removeEscena(index?: Number);
}

export const ConsolaDMX: FileManager_ConsolaProxy;

/** @todo expose this method */
export function FileManager_Consola(filename: String): FileManager_ConsolaProxy;