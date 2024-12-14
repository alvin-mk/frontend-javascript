namespace Subjects {
    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
            }
            return 'No available teacher';
        }
    }
}