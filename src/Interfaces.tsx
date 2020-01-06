export interface communEntite {
  id: number;
  nom: string;
  description: string;
}

export default interface IdeeEntite extends communEntite {
  level: number;
  projet: boolean;
  contenu: string;

  tag: BadgeEntite;

  listeDomaine: Array<DomaineEntite>;
  listeGrappe: Array<GrappeEntite>;
  listeEsclave: Array<IdeeEntite>;
  listeBadge: Array<BadgeEntite>;
}

export interface TagEntite extends communEntite {
  listeIdee: Array<IdeeEntite>;
  listeBadge: Array<BadgeEntite>;
}

export interface DomaineEntite extends communEntite {
  listeGrappe: Array<GrappeEntite>;
  listeBadge: Array<BadgeEntite>;
}
export interface GrappeEntite extends communEntite {
  listeIdee: Array<IdeeEntite>;
  listeBadge: Array<BadgeEntite>;
}

export interface BadgeEntite extends communEntite {
  nombre: number;
  idDomaine: number;
}
