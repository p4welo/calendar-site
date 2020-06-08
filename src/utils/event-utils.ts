import { Event } from '@app/model';
import { isNew, isNowOrFuture } from './date-utils';

export const isPromoted = (event: Event) => event.promoted;
export const isVisible = (event: Event) => event.visible;
export const isFuture = (event: Event) => isNowOrFuture(event.dateTo);
export const isFresh = (event: Event) => isNew(event.date);
export const isNotCancelled = (event: Event) => !event.cancelled;

// @ts-ignore
export const mapToEventEntities = (data: any): Event[] => data.allMarkdownRemark.edges.map(({node}) => {
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
