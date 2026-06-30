/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const sortedIntervals = intervals.sort((int1, int2) => {
            return int1.start - int2.start;
        })
        for (let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            const prev = intervals[i-1];
            if (current.start < prev.end) {
                return false;
            }
        }
        return true;
    }
}
