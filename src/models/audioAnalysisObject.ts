/**
 * Spotify Web API with fixes and improvements from sonalluxLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Meta, metaSchema } from './meta';
import { SectionObject, sectionObjectSchema } from './sectionObject';
import { SegmentObject, segmentObjectSchema } from './segmentObject';
import {
  TimeIntervalObject,
  timeIntervalObjectSchema,
} from './timeIntervalObject';
import { Track, trackSchema } from './track';

export interface AudioAnalysisObject {
  meta?: Meta;
  track?: Track;
  /** The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats. */
  bars?: TimeIntervalObject[];
  /** The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums. */
  beats?: TimeIntervalObject[];
  /** Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness. */
  sections?: SectionObject[];
  /** Each segment contains a roughly conisistent sound throughout its duration. */
  segments?: SegmentObject[];
  /** A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments). */
  tatums?: TimeIntervalObject[];
}

export const audioAnalysisObjectSchema: Schema<AudioAnalysisObject> = object({
  meta: ['meta', optional(lazy(() => metaSchema))],
  track: ['track', optional(lazy(() => trackSchema))],
  bars: ['bars', optional(array(lazy(() => timeIntervalObjectSchema)))],
  beats: ['beats', optional(array(lazy(() => timeIntervalObjectSchema)))],
  sections: ['sections', optional(array(lazy(() => sectionObjectSchema)))],
  segments: ['segments', optional(array(lazy(() => segmentObjectSchema)))],
  tatums: ['tatums', optional(array(lazy(() => timeIntervalObjectSchema)))],
});
