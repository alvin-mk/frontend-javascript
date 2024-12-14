namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
            }
            return 'No available teacher';
        }
    }
}