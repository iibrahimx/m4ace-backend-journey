// =======================================
// Modern Syntax Features
// =======================================

const user = {
  name: "Ibrahim",
  profile: {
    contact: {
      email: "eebrahiim04@gmail.com",
    },
  },
};

const settings = {
  theme: null,
  language: "en",
};

// Get user email or return default text if any step is null or undefined
console.log(
  "User email:",
  user.profile?.contact?.email ?? "Email is not available",
);

// Get user phone number or return default text if any step is null or undefined
console.log(
  "User phone:",
  user.profile?.contact?.phone ?? "Phone number is not available",
);

// Get user address or return default text if any step is null or undefined
console.log(
  "User address:",
  user.profile?.address?.city ?? "Address is not available",
);

// Get settings theme or return default if null or undefined
console.log("Theme:", settings.theme ?? "default");

// Get settings language or return 'en' if null or undefined
console.log("Language:", settings.language ?? "en");

// Get settings timezone or return 'UTC' if null or undefined
console.log("Timezone:", settings.timezone ?? "UTC");

// Combine both examples
const apiResponse = {
  data: {
    user: {
      username: "iibrahimx",
    },
  },
};

console.log(
  "Username:",
  apiResponse?.data?.user?.username ?? "No username found",
);

console.log(
  "Account status:",
  apiResponse?.data?.user?.status ?? "No status found",
);
