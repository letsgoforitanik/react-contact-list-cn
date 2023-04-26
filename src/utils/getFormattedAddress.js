export function getFormattedAddress({ street, suite, city, zipcode }) {
    return `${street}, ${suite}, ${city}, ${zipcode}`;
}
