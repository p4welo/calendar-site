import { isNew, isNowOrFuture } from './date-utils';

export const isPromoted = (event) => event.promoted;
export const isVisible = (event) => event.visible;
export const isFuture = (event) => isNowOrFuture(event.dateTo);
export const isNotCancelled = (event) => !event.cancelled;

export const mapToEventEntities = (data) => data.allMarkdownRemark.edges.map(({node}) => {
  return {
    new: isNew(node.frontmatter.date),
    date: node.frontmatter.date,
    promoted: node.frontmatter.promoted,
    cancelled: node.frontmatter.cancelled,
    visible: node.frontmatter.visible,
    image: node.frontmatter.image.childImageSharp.fluid,
    title: node.frontmatter.title,
    dateFrom: node.frontmatter.dateFrom,
    dateTo: node.frontmatter.dateTo,
    multiday: node.frontmatter.dateTo !== node.frontmatter.dateFrom,
    path: node.frontmatter.path,
    city: node.frontmatter.city
  };
});