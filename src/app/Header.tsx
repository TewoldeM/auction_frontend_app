import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  const fakeUsers = [
    {
      id: 1,
      name: "John Doe",
      image: "/assets/car.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/assets/car.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      image: "/assets/car.jpg",
    },
    {
      id: 4,
      name: "Sarah Lee",
      image: "/assets/car.jpg",
    },
    {
      id: 5,
      name: "Tom Wilson",
      image: "/assets/car.jpg",
    },
  ];

  // Assuming you want to display the user with id 3
  const selectedUserId = 3;

  return (
    <div className="bg-gray-200 py-2">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link href="/" className="hover:underline flex items-center gap-1">
            <Image
             className="rounded-sm"
              src="/assets/primeauctions-high-resolution-logo-white.svg"
              width={80}
              height={80}
              alt="Logo"
            />
            PrimeAuction
          </Link>

          <div className="flex items-center gap-8">
          <Button>
          <Link href="/auctions" className=" flex items-center gap-1">
              All Auctions
            </Link>
            </Button>

            {fakeUsers && (
              <>
               <Button>
               <Link
                  href="/items/create"
                  className=" flex items-center gap-1"
                >
                  Create Auction
                </Link>
                </Button>

               <Button>
               <Link
                  href="/myauctions"
                  className=" flex items-center gap-1"
                >
                  My Auctions
                </Link>
               </Button>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {fakeUsers && (
            <>
              <IoNotificationsOutline size={24} />
          
            </>
          )}
          {fakeUsers.map((user) => {
            if (user.id === selectedUserId) {
              return (
                <div key={user.id} className="flex items-center">
                  <Image
                    src={user.image}
                    width={40}
                    height={40}
                    alt={`${user.name}'s avatar`}
                    className="rounded-full"
                  />
                  <span className="ml-2">{user.name}</span>
                </div>
              );
            }
            return null;
          })}
          <div className="flex gap-2">
            {/* <Button>Sign Out</Button> */}
            <Button type="submit">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;