// Define MajorCredits interface with a brand property
interface MajorCredits {
    credits: number;
    __brand: 'major';
}

// Define MinorCredits interface with a brand property
interface MinorCredits {
    credits: number;
    __brand: 'minor';
}

// Function to sum Major Credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'major'
    };
}

// Function to sum Minor Credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'minor'
    };
}

// Optional: Example usage to demonstrate type safety
const majorSubject1: MajorCredits = { credits: 3, __brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, __brand: 'major' };

const minorSubject1: MinorCredits = { credits: 1, __brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 2, __brand: 'minor' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Major Credits:', totalMajorCredits.credits);
console.log('Minor Credits:', totalMinorCredits.credits);

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };