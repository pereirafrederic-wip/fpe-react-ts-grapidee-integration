export interface communEntite {
  id: number;
  nom: string;
  description: string;
}

export default interface ideeEntite extends communEntite {
  level: number;
  projet: boolean;
  contenu: string;

  tag: tagEntite;

  listeDomaine: Array<DomaineEntite>;
  listeGrappe: Array<GrappeEntite>;
  listeEsclave: Array<ideeEntite>;
  listeBadge: Array<badgeEntite>;
}

export interface tagEntite extends communEntite {
  listeIdee: Array<ideeEntite>;
  listeBadge: Array<badgeEntite>;
}

export interface DomaineEntite extends communEntite {
  listeGrappe: Array<GrappeEntite>;
  listeBadge: Array<badgeEntite>;
}
export interface GrappeEntite extends communEntite {
  listeIdee: Array<ideeEntite>;
  listeBadge: Array<badgeEntite>;
}

export interface badgeEntite extends communEntite {
  nombre: number;
  idDomaine: number;
}
