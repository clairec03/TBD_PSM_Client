
"use strict";

let CompositeDetectedPersons = require('./CompositeDetectedPersons.js');
let TrackedPerson = require('./TrackedPerson.js');
let DetectedPersons = require('./DetectedPersons.js');
let CompositeDetectedPerson = require('./CompositeDetectedPerson.js');
let TrackedPerson2d = require('./TrackedPerson2d.js');
let ImmDebugInfo = require('./ImmDebugInfo.js');
let DetectedPerson = require('./DetectedPerson.js');
let PersonTrajectory = require('./PersonTrajectory.js');
let ImmDebugInfos = require('./ImmDebugInfos.js');
let TrackedPersons2d = require('./TrackedPersons2d.js');
let TrackedGroups = require('./TrackedGroups.js');
let PersonTrajectoryEntry = require('./PersonTrajectoryEntry.js');
let TrackedPersons = require('./TrackedPersons.js');
let TrackedGroup = require('./TrackedGroup.js');
let TrackingTimingMetrics = require('./TrackingTimingMetrics.js');

module.exports = {
  CompositeDetectedPersons: CompositeDetectedPersons,
  TrackedPerson: TrackedPerson,
  DetectedPersons: DetectedPersons,
  CompositeDetectedPerson: CompositeDetectedPerson,
  TrackedPerson2d: TrackedPerson2d,
  ImmDebugInfo: ImmDebugInfo,
  DetectedPerson: DetectedPerson,
  PersonTrajectory: PersonTrajectory,
  ImmDebugInfos: ImmDebugInfos,
  TrackedPersons2d: TrackedPersons2d,
  TrackedGroups: TrackedGroups,
  PersonTrajectoryEntry: PersonTrajectoryEntry,
  TrackedPersons: TrackedPersons,
  TrackedGroup: TrackedGroup,
  TrackingTimingMetrics: TrackingTimingMetrics,
};
