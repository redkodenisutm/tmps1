import axios from "axios";

class Db {
    private static instance: Db;
    private constructor(name: string) {
        this.name = name;
    }

    public name: string;

    public static getInstance(): Db {
        if (!this.instance) {
            this.instance = new Db("First instance");
        }

        return this.instance;
    }

    public connect(user: string, password: string) {
        if (user === "admin" && password === "admin") {
            console.log(`Connected to ${this.name}`);
        } else {
            console.log("Wrong credentials");
        }
    }

    public async findUsersByIds(ids: number[]): Promise<any[]> {
        try {
            const { data } = await axios("https://dummyjson.com/users");

            const users = data.users.filter((user) => ids.includes(user.id));

            if (users.length === 0) {
                throw new Error("No users found");
            }

            return users;
        } catch (error) {
            console.log(error);
            throw new Error("Server error");
        }
    }
}

export default async () => {
    console.log("SINGLETON PATTERN");

    const inst1 = Db.getInstance();
    const inst2 = Db.getInstance();

    inst2.connect("admin", "admin");
    console.log("Same refference:", inst1 === inst2);

    const users = await inst1.findUsersByIds([1, 2, 3]);

    console.log(users);

    console.log("\n");
};
