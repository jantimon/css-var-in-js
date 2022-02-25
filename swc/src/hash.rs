use base64::encode_config;
use sha3::{Digest, Sha3_256};

/// Creates a CSS identifier of the given length using SHA3.
///
/// In CSS, identifiers (including element names, classes, and IDs in
/// selectors) can contain only the characters \[a-zA-Z0-9\] and ISO 10646
/// characters U+00A0 and higher, plus the hyphen (-) and the underscore (_);
/// they cannot start with a digit, two hyphens, or a hyphen followed by a
/// digit.
pub fn hash(data: impl AsRef<[u8]>, length: usize) -> String {
    let mut hasher = Sha3_256::new();
    hasher.update(data);
    let hash_base64 = encode_config(hasher.finalize(), base64::URL_SAFE_NO_PAD);

    let first_char = hash_base64.chars().nth(0).unwrap();
    // Ensure that the identifier starts with [_a-zA-Z]
    let valid_first_char = if first_char.is_digit(10) || first_char == '-' {
        '_'
    } else {
        first_char
    };
    let mut css_safe_string: String = String::from(valid_first_char);
    css_safe_string.push_str(&hash_base64[1..length]);
    css_safe_string
}

#[cfg(test)]
mod hash_tests {
    use super::*;

    #[test]
    fn test_hey() {
        assert_eq!(hash(String::from("hey"), 5), "XldIH");
    }

    #[test]
    fn test_long() {
        assert_eq!(hash(String::from("hey"), 15), "XldIHZZJaTy1TcB");
    }
}
