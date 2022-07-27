<template>
    <div>
        <form method="post" class="form" @submit.prevent="checkAndSend">
            <div class="input_wrap">
                <div class="error">{{ error.name }}</div>
                <input type="text" id="name" :class="{ 'invalid': error.name }" v-model="name"
                    @focus="resetError('name')">
                <label for="name">Name</label>
            </div>
            <div class="input_wrap">
                <div class="error">{{ error.email }}</div>
                <input type="text" id="email" :class="{ 'invalid': error.email }" v-model="email"
                    @focus="resetError('email')">
                <label for="email">Email</label>
            </div>
            <div class="input_wrap">
                <div class="error">{{ error.phone }}</div>
                <input type="text" id="phone" :class="{ 'invalid': error.phone }" v-model="phone"
                    @focus="resetError('phone')">
                <label for="phone">Phone No</label>
            </div>
            <div class="input_wrap">
                <input type="text" id="subject" :class="{ 'invalid': error.subject }" v-model="subject"
                    @focus="resetError('subject')">
                <label for="subject">Subject</label>
                <div class="error">{{ error.subject }}</div>
            </div>
            <div class="textarea_wrap">
                <textarea name="textarea" id="message" :class="{ 'invalid': error.message }" v-model="message"
                    @focus="resetError('message')"></textarea>
                <label for="message">Message</label>
                <div class="error">{{ error.message }}</div>
            </div>
            <button class="btn form_button" type="submit">Send message</button>
        </form>
        <modal-window v-if="showModal" @close="showModal = false">
            <template #body>{{ answer.msg }}</template>
        </modal-window>
    </div>
</template>

<script>
import ModalWindow from '@/components/general/ModalWindow'

export default {
    name: "Form",
    components: {
        ModalWindow
    },
    data() {
        return {
            API_BOT_ID: "5248267262:AAGS92XigzCP4LToTDiE8rcdXUcKcFF7cSs",
            CHAT_ID: "-1001733809580",
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            showModal: false,
            error: {
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            },
            answer: {
                success: null,
                msg: ""
            }
        }
    },
    methods: {
        checkAndSend() {
            let valid = true
            if (this.name === "") {
                this.error.name = "Enter your name"
                valid = false
            }
            if (this.name.length === 1) {
                this.error.name = "Minimal length is two chars"
                valid = false
            }
            if (this.email === "") {
                this.error.email = "Enter your email"
                valid = false
            } else {
                if (this.isValidEmail(this.email) === false) {
                    this.error.email = "Enter your email"
                    valid = false
                }
            }
            if (this.phone === "") {
                this.error.phone = "Enter your phone number"
                valid = false
            } else {
                if (this.isValidPhone(this.phone) === false) {
                    this.error.phone = "Еhe number must contain 10 digits"
                    valid = false
                }
            }
            if (this.subject === "") {
                this.error.subject = "Enter subject text"
                valid = false
            }
            if (this.message === "") {
                this.error.message = "Enter message text"
                valid = false
            }
            if (valid) {
                const message_text = "<i>Feedback data</i>" +
                    "%0a<b>Name: </b>" + this.name +
                    "%0a<b>Email: </b>" + this.email +
                    "%0a<b>Phone: </b>" + this.phone +
                    "%0a<b>Subject: </b>" + this.subject +
                    "%0a<b>Message: </b>" + this.message
                fetch(`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`)
                    .then(resp => {
                        return resp.json()
                    })
                    .then(resp => {
                        if (resp.ok) {
                            this.answer.success = true
                            this.answer.msg = "Message successfully send"
                            this.showModal = true
                            this.name = this.email = this.phone = this.subject = this.message = ""
                        } else {
                            this.answer.success = false
                            this.answer.msg = resp.description
                            this.showModal = true
                            this.name = this.email = this.phone = this.subject = this.message = ""
                        }
                    })
                    .catch(() => {
                        this.answer.success = false
                        this.answer.msg = "Some error eccures. Please try again later"
                        this.showModal = true
                    })
            }
        },
        resetError(field) {
            this.error[field] = ""
        },
        isValidPhone(phone) {
            return Boolean(phone.match(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            ))
        },
        isValidEmail(email) {
            return Boolean(email.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .input_wrap {
        flex-basis: 45%;
        position: relative;
        margin-bottom: 15px;
    }
    .textarea_wrap {
        height: 110px;
        position: relative;
        flex-basis: 100%;
        margin-bottom: 15px;
    }
    &_button {
        padding: 10px 0;
        width: 100%;
        text-transform: uppercase;
    }
}
input,
textarea {
    padding: 12px 20px;
    border: 2px solid #2094E6;
    background-color: transparent;
    border-radius: 5px;
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #666666;
    outline: none;
}
.invalid {
    border: 2px solid red;
}
input {
    width: 290px;
}
textarea {
    width: 100%;
    height: 110px;
    resize: none;
}
.input_wrap label,
.textarea_wrap label {
    padding: 0 4px;
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #666666;
    background-color: #fff;
    position: absolute;
    top: -15px;
    left: 10px;
}
.error {
    position: absolute;
    bottom: -8px;
    left: 10px;
    padding: 0 4px;
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: red;
    background-color: #fff;
}
@media screen and (max-width: 667px) {
    .form {
        .input_wrap {
            flex-basis: 100%;
            input {
                width: 100%;
            }
        }
    }
}
</style>