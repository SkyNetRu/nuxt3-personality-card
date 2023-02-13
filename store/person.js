import {LoremIpsum} from "lorem-ipsum";

export const usePersonStore = defineStore({
    id: 'person-store',
    state: () => {
        return {
            person: {},
            desc: '',
            brands: []
        }
    },
    actions: {
        async getPerson() {
            this.person = await $fetch('https://random-data-api.com/api/v2/users');
            this.generateDesc();
            await this.getBrands();
        },
        generateDesc() {
            const lorem = new LoremIpsum({
                sentencesPerParagraph: {
                    max: 8,
                    min: 4
                },
                wordsPerSentence: {
                    max: 16,
                    min: 4
                }
            });

            this.desc = lorem.generateSentences(3);
        },
        async getBrands() {
            let size = Math.floor(Math.random() * 13) + 2;
            this.brands = await $fetch('https://random-data-api.com/api/v2/appliances?size=' + size);
        }
    },
    getters: {
        location() {
            let address = this.person.address;
            return address.street_name + ' '
                + address.street_address + ' '
                + address.city + ' '
                + address.state + ' '
                + address.zip_code + ' '
                + address.country;
        },
        birthDate() {
            return this.person.date_of_birth.replace(/-/g, "/");
        },
        yearsOld() {
            let birthdate = new Date(this.person.date_of_birth);
            let now = new Date();
            return Math.floor((now - birthdate) / (1000 * 60 * 60 * 24 * 365))
        },
        fullName() {
            return this.person.first_name + ' ' + this.person.last_name;
        }
    },
})