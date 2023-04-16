import { UserAddress } from "./UserAddress";

export function UserProfile({ name, surname, street, city, country }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <UserAddress street={street} city={city} country={country} />
        </div>
    );
}