export interface SRSData {
  easiness: number;
  interval: number;
  repetitions: number;
  nextReviewDate: Date;
}

export function calculateNextReview(
  quality: number, // 0 to 5
  previousSRS: SRSData
): SRSData {
  let { easiness, interval, repetitions } = previousSRS;

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easiness);
    }
    repetitions++;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easiness = easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easiness < 1.3) easiness = 1.3;

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    easiness,
    interval,
    repetitions,
    nextReviewDate,
  };
}

export const initialSRS: SRSData = {
  easiness: 2.5,
  interval: 0,
  repetitions: 0,
  nextReviewDate: new Date(),
};
