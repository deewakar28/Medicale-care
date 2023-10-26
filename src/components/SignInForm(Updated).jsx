import React from "react";

function SignInComponent(props) {
  return (
    <main className="bg-cyan-500 flex flex-col px-5">
      <section className="self-center w-full max-w-[1187px] ml-24 mt-44 mb-12 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col -mt-0.5 max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-3xl font-medium tracking-wider max-w-[396px] ml-44 -mb-px max-md:ml-2.5">
                Sign In
              </h1>
              <div className="flex w-[516px] max-w-full flex-col ml-3.5 mt-16 max-md:mt-10">
                <h2 className="text-black text-2xl tracking-wide">Email</h2>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="XYZ@gmail.com"
                  name="Email"
                  className="flex flex-col relative shrink-0 box-border border bg-cyan-500 mt-5 -mb-px p-2.5 rounded-[300px] border-solid border-stone-300"
                  required={true}
                />
                <div className="bg-black w-full h-px mt-0.5 max-md:max-w-full" />
                <h2 className="text-black text-2xl tracking-wide max-w-[289px] mt-16 max-md:mt-10">
                  Password
                </h2>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="Password"
                  className="flex flex-col relative shrink-0 box-border border bg-cyan-500 mt-5 mb-1.5 p-2.5 rounded-[300px] border-solid border-stone-300"
                  required={true}
                />
                <div className="bg-black w-full h-px -mt-1 max-md:max-w-full" />
              </div>
              <div className="flex w-[510px] max-w-full flex-col mt-28 max-md:mt-10">
                <button className="text-cyan-400 text-opacity-90 text-xl font-medium tracking-wide bg-black self-stretch px-5 py-6 rounded-3xl max-md:max-w-full">
                  Sign In
                </button>
                <div className="border self-stretch flex grow flex-col mt-5 px-5 py-6 rounded-3xl border-solid border-neutral-400 max-md:max-w-full">
                  <div className="self-center flex ml-0 w-[247px] max-w-full items-start justify-between gap-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d07a5e8-481d-4f09-8936-fcaf89b16781?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&"className="aspect-[1.08] object-cover object-center w-7 fill-black overflow-hidden self-stretch max-w-full"
                      alt="Google Logo"
                    />
                    <div className="text-black text-xl font-medium tracking-wide self-center max-w-[262px] grow shrink-0 basis-auto my-auto">
                      Sign In with Google
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-black text-2xl font-medium tracking-wide self-center max-w-[431px] -ml-6 mt-20 max-md:mt-10">
                <span className="">Don’t have an account? </span>
                <span className="font-medium">Sign Up</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d426e6d-7395-45fe-976a-604b81609d65?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8&"className="aspect-[1.42] object-cover object-center w-[593px] overflow-hidden max-w-full mt-24 max-md:mt-10"
              alt="Image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignInComponent;