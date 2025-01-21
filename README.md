# Login Screen with Email/Password and Phone/OTP Authentication

This project demonstrates a functional login screen with two methods of authentication:

1. **Email and Password Login**.
2. **Phone Number and OTP Login**.

It includes:

- Form validation using `react-hook-form` and `zod`.
- Error handling for invalid inputs.
- Toast notifications for user feedback.
- A responsive and user-friendly interface.

---

## Features

- **Email/Password Login**:

  - Input validation for email format and password length.
  - Error messages for invalid inputs.

- **Phone/OTP Login**:

  - Validation for Indian phone numbers (`+91` format).
  - Simulated OTP sending and verification.

- **Responsive UI**:

  - Built with Tailwind CSS for a modern design.

- **Toast Notifications**:
  - Feedback for login success, OTP sent, and errors.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ritikjee/mediversal-assignment
   ```
2. Navigate to the project directory:
   ```bash
   cd mediversal-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Select the login method:
   - **Email/Password**: Enter a valid email and password to log in.
   - **Phone/OTP**: Enter a valid Indian phone number (`+91`) to receive an OTP.
2. Submit the form and view the toast notifications for feedback.

---

## Dependencies

- **React**: Frontend framework for building the UI.
- **React Hook Form**: For form management.
- **Zod**: For schema-based form validation.
- **Tailwind CSS**: For responsive and modern styling.
- **Toast**: For user-friendly notifications.

---

## Project Structure

```
.
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── radio-group.tsx
│   │   └── toaster.tsx
├── hooks/
│   └── use-toast.tsx
├── pages/
│   └── login.tsx
├── styles/
│   └── globals.css
└── README.md
```

---

## Video

[Working Video](https://github.com/user-attachments/assets/50f75ac1-964f-4b84-af7e-65d0ecdd0bfd)

## Screenshots

### Login with Email/Password

![Email Login Screenshot](https://github.com/user-attachments/assets/7c801be6-c10f-4627-ba8e-c6cdb48b8d52)

### Login with Phone/OTP

![Phone Login Screenshot](https://github.com/user-attachments/assets/1e360ca0-65ef-4118-989c-d793edb4b31a)

---


## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contribution

Contributions are welcome! Feel free to submit issues and pull requests.

---

## Author

**Your Name**  
[GitHub Profile](https://github.com/ritikjee)
