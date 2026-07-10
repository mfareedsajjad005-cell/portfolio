  import { useState } from "react";
 import { MapPin, BedDouble, Bath, Ruler, X, Phone, LogOut, Lock, Mail, User as UserIcon } from "lucide-react";
 
 const PROPERTIES = [
   {
     id: "p1",
     title: "Sunrise Heights Flat",
     type: "Flat",
     price: "₹42,00,000",
     location: "Model Town, Lahore",
     beds: 3,
     baths: 2,
     area: "1450 sqft",
     year: "2019",
     description:
       "A bright 3-bedroom flat on the 4th floor with an open living-dining area, balcony facing the park, and covered parking. Recently renovated kitchen with modular fittings.",
     amenities: ["Covered Parking", "24/7 Security", "Elevator", "Backup Power"],
   },
   {
     id: "p2",
     title: "Willow Court House",
     type: "House",
     price: "₹98,50,000",
     location: "DHA Phase 5, Karachi",
     beds: 5,
     baths: 4,
     area: "3200 sqft",
     year: "2015",
     description:
       "Double-story corner house with a private garden, servant quarter, and a spacious rooftop terrace. Quiet street, walking distance to main boulevard.",
     amenities: ["Private Garden", "Rooftop Terrace", "Servant Quarter", "Garage"],
   },
   {
     id: "p3",
     title: "Cedar View Apartment",
     type: "Flat",
     price: "₹28,75,000",
     location: "F-10, Islamabad",
     beds: 2,
     baths: 2,
     area: "1050 sqft",
     year: "2021",
     description:
       "Compact and modern 2-bed apartment in a gated society, ideal for small families. Gym and community hall on the ground floor.",
     amenities: ["Gated Society", "Gym Access", "Community Hall", "Lift"],
   },
   {
     id: "p4",
     title: "Maple Residency House",
     type: "House",
     price: "₹1,25,00,000",
     location: "Bahria Town, Rawalpindi",
     beds: 6,
     baths: 5,
     area: "4500 sqft",
     year: "2022",
     description:
       "Brand new construction with a marble-finished interior, home theatre room, and a driveway for 3 cars. Located in a premium block with 24/7 patrolling.",
     amenities: ["Home Theatre", "3-Car Driveway", "Marble Flooring", "Patrolled Block"],
   },
 ];
 
 function CornerFrame() {
   return (
     <>
       {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((pos, i) => (
         <span
           key={i}
           className={`absolute ${pos} w-3 h-3 pointer-events-none`}
           style={{
             borderTop: pos.includes("top") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
             borderBottom: pos.includes("bottom") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
             borderLeft: pos.includes("left") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
             borderRight: pos.includes("right") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
           }}
         />
       ))}
     </>
   );
 }
 
 function AuthScreen({ onAuth }) {
   const [mode, setMode] = useState("login"); // login | signup
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
 
   const submit = (e) => {
     e.preventDefault();
     if (!email.trim() || !password.trim() || (mode === "signup" && !name.trim())) {
       setError("Fill in every field to continue.");
       return;
     }
     if (password.length < 4) {
       setError("Password should be at least 4 characters.");
       return;
     }
     setError("");
     onAuth({ name: mode === "signup" ? name.trim() : email.split("@")[0], email: email.trim() });
   };
 
   return (
     <div
       className="min-h-screen w-full flex items-center justify-center px-4"
       style={{
         backgroundColor: "#0F2338",
         backgroundImage:
           "linear-gradient(rgba(234,243,250,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,243,250,0.06) 1px, transparent 1px)",
         backgroundSize: "20px 20px",
         fontFamily: "'Inter', sans-serif",
       }}
     >
       <div
         className="relative w-full max-w-sm p-7"
         style={{ backgroundColor: "#122A44", border: "1px solid rgba(234,243,250,0.15)" }}
       >
         <CornerFrame />
         <div
           className="text-[11px] uppercase tracking-[0.14em] mb-2"
           style={{ color: "#E3A857", fontFamily: "'JetBrains Mono', monospace" }}
         >
           Blueprint Estates
         </div>
         <h1
           className="text-2xl mb-6"
           style={{ color: "#EAF3FA", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
         >
           {mode === "login" ? "Sign in to view listings" : "Create your account"}
         </h1>
 
         <div
           className="flex mb-6"
           style={{ border: "1px solid rgba(234,243,250,0.2)" }}
         >
           {["login", "signup"].map((m) => (
             <button
               key={m}
               onClick={() => { setMode(m); setError(""); }}
               className="flex-1 py-2 text-[12px] uppercase tracking-[0.06em] transition-colors"
               style={{
                 fontFamily: "'JetBrains Mono', monospace",
                 backgroundColor: mode === m ? "#E3A857" : "transparent",
                 color: mode === m ? "#0F2338" : "rgba(234,243,250,0.6)",
               }}
             >
               {m === "login" ? "Log In" : "Sign Up"}
             </button>
           ))}
         </div>
 
         <form onSubmit={submit} className="flex flex-col gap-4">
           {mode === "signup" && (
             <div className="flex flex-col gap-1.5">
               <label className="text-[11px] uppercase tracking-[0.08em]" style={{ color: "rgba(234,243,250,0.55)", fontFamily: "'JetBrains Mono', monospace" }}>
                 Full Name
               </label>
               <div className="flex items-center gap-2 px-3 py-2.5" style={{ backgroundColor: "#0F2338", border: "1px solid rgba(234,243,250,0.15)" }}>
                 <UserIcon size={15} style={{ color: "rgba(234,243,250,0.4)" }} />
                 <input
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Your name"
                   className="bg-transparent outline-none text-[14px] flex-1"
                   style={{ color: "#EAF3FA" }}
                 />
               </div>
             </div>
           )}
 
           <div className="flex flex-col gap-1.5">
             <label className="text-[11px] uppercase tracking-[0.08em]" style={{ color: "rgba(234,243,250,0.55)", fontFamily: "'JetBrains Mono', monospace" }}>
               Email
             </label>
             <div className="flex items-center gap-2 px-3 py-2.5" style={{ backgroundColor: "#0F2338", border: "1px solid rgba(234,243,250,0.15)" }}>
               <Mail size={15} style={{ color: "rgba(234,243,250,0.4)" }} />
               <input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="you@email.com"
                 className="bg-transparent outline-none text-[14px] flex-1"
                 style={{ color: "#EAF3FA" }}
               />
             </div>
           </div>
 
           <div className="flex flex-col gap-1.5">
             <label className="text-[11px] uppercase tracking-[0.08em]" style={{ color: "rgba(234,243,250,0.55)", fontFamily: "'JetBrains Mono', monospace" }}>
               Password
             </label>
             <div className="flex items-center gap-2 px-3 py-2.5" style={{ backgroundColor: "#0F2338", border: "1px solid rgba(234,243,250,0.15)" }}>
               <Lock size={15} style={{ color: "rgba(234,243,250,0.4)" }} />
               <input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="••••••••"
                 className="bg-transparent outline-none text-[14px] flex-1"
                 style={{ color: "#EAF3FA" }}
               />
             </div>
           </div>
 
           {error && (
             <div className="text-[12.5px]" style={{ color: "#E38757", fontFamily: "'JetBrains Mono', monospace" }}>
               {error}
             </div>
           )}
 
           <button
             type="submit"
             className="mt-2 w-full py-3 text-[13px] uppercase tracking-[0.06em]"
             style={{ backgroundColor: "#E3A857", color: "#0F2338", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
           >
             {mode === "login" ? "Log In" : "Create Account"}
           </button>
         </form>
 
         <div
           className="mt-5 text-center text-[12.5px]"
           style={{ color: "rgba(234,243,250,0.4)" }}
         >
           This is a demo login — no real account is created.
         </div>
       </div>
     </div>
   );
 }
 
 function BlueprintThumb({ label, kind }) {
   return (
     <div
       className="relative w-full h-40 flex items-center justify-center overflow-hidden"
       style={{
         backgroundColor: "#16324F",
         backgroundImage:
           "linear-gradient(rgba(234,243,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(234,243,250,0.08) 1px, transparent 1px)",
         backgroundSize: "16px 16px",
       }}
     >
       <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#EAF3FA" strokeWidth="1" opacity="0.8">
         {kind === "House" ? (
           <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
         ) : (
           <>
             <rect x="4" y="3" width="16" height="18" />
             <line x1="4" y1="8" x2="20" y2="8" />
             <line x1="4" y1="13" x2="20" y2="13" />
             <line x1="4" y1="18" x2="20" y2="18" />
             <line x1="12" y1="3" x2="12" y2="21" />
           </>
         )}
       </svg>
       <span
         className="absolute bottom-2 right-3 text-[10px] uppercase tracking-[0.1em]"
         style={{ color: "rgba(234,243,250,0.45)", fontFamily: "'JetBrains Mono', monospace" }}
       >
         {label}
       </span>
       {/* corner brackets */}
       {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((pos, i) => (
         <span
           key={i}
           className={`absolute ${pos} w-3 h-3`}
           style={{
             borderTop: pos.includes("top") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
             borderBottom: pos.includes("bottom") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
             borderLeft: pos.includes("left") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
             borderRight: pos.includes("right") ? "1.5px solid rgba(227,168,87,0.7)" : "none",
           }}
         />
       ))}
     </div>
   );
 }
 
 export default function PropertyListing() {
   const [selected, setSelected] = useState(null);
   const [user, setUser] = useState(null);
 
   if (!user) {
     return <AuthScreen onAuth={setUser} />;
   }
 
   return (
     <div
       className="min-h-screen w-full py-10 px-4"
       style={{ backgroundColor: "#0F2338", fontFamily: "'Inter', sans-serif" }}
     >
       <div className="max-w-5xl mx-auto">
         <div className="mb-8 flex items-start justify-between gap-4">
           <div>
             <div
               className="text-[11px] uppercase tracking-[0.14em] mb-2"
               style={{ color: "#E3A857", fontFamily: "'JetBrains Mono', monospace" }}
             >
               Listings · {PROPERTIES.length} Properties
             </div>
             <h1
               className="text-3xl md:text-4xl"
               style={{ color: "#EAF3FA", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
             >
               Houses &amp; Flats for Sale
             </h1>
           </div>
           <div className="flex items-center gap-3 flex-shrink-0 pt-1">
             <div className="text-right hidden sm:block">
               <div className="text-[13px]" style={{ color: "#EAF3FA" }}>{user.name}</div>
               <div className="text-[11px]" style={{ color: "rgba(234,243,250,0.45)" }}>{user.email}</div>
             </div>
             <button
               onClick={() => setUser(null)}
               className="flex items-center gap-1.5 px-3 py-2 text-[12px] uppercase tracking-[0.06em]"
               style={{ border: "1px solid rgba(234,243,250,0.2)", color: "rgba(234,243,250,0.7)", fontFamily: "'JetBrains Mono', monospace" }}
             >
               <LogOut size={13} />
               Log Out
             </button>
           </div>
         </div>
 
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
           {PROPERTIES.map((p) => (
             <div
               key={p.id}
               className="flex flex-col"
               style={{
                 backgroundColor: "#122A44",
                 border: "1px solid rgba(234,243,250,0.12)",
               }}
             >
               <BlueprintThumb label={p.type} kind={p.type} />
               <div className="p-4 flex flex-col flex-1">
                 <div
                   className="text-lg mb-1"
                   style={{ color: "#EAF3FA", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                 >
                   {p.title}
                 </div>
                 <div
                   className="flex items-center gap-1 text-[13px] mb-3"
                   style={{ color: "rgba(234,243,250,0.55)" }}
                 >
                   <MapPin size={13} />
                   {p.location}
                 </div>
                 <div
                   className="text-xl mb-3"
                   style={{ color: "#E3A857", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                 >
                   {p.price}
                 </div>
                 <div
                   className="flex items-center gap-4 text-[13px] mb-4"
                   style={{ color: "rgba(234,243,250,0.6)" }}
                 >
                   <span className="flex items-center gap-1"><BedDouble size={14} />{p.beds}</span>
                   <span className="flex items-center gap-1"><Bath size={14} />{p.baths}</span>
                   <span className="flex items-center gap-1"><Ruler size={14} />{p.area}</span>
                 </div>
                 <button
                   onClick={() => setSelected(p)}
                   className="mt-auto w-full py-2.5 text-[13px] uppercase tracking-[0.06em] transition-colors"
                   style={{ backgroundColor: "#E3A857", color: "#0F2338", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
                 >
                   View Detail
                 </button>
               </div>
             </div>
           ))}
         </div>
       </div>
 
       {/* detail overlay */}
       {selected && (
         <div
           className="fixed inset-0 flex items-center justify-center p-4 z-50"
           style={{ backgroundColor: "rgba(6,16,27,0.75)" }}
           onClick={() => setSelected(null)}
         >
           <div
             className="w-full max-w-lg max-h-[88vh] overflow-y-auto"
             style={{ backgroundColor: "#122A44", border: "1px solid rgba(234,243,250,0.15)" }}
             onClick={(e) => e.stopPropagation()}
           >
             <div className="relative">
               <BlueprintThumb label={selected.type} kind={selected.type} />
               <button
                 onClick={() => setSelected(null)}
                 className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center"
                 style={{ backgroundColor: "rgba(15,35,56,0.75)", color: "#EAF3FA" }}
                 aria-label="Close detail"
               >
                 <X size={16} />
               </button>
             </div>
 
             <div className="p-6">
               <div
                 className="text-2xl mb-1"
                 style={{ color: "#EAF3FA", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
               >
                 {selected.title}
               </div>
               <div
                 className="flex items-center gap-1 text-[13px] mb-4"
                 style={{ color: "rgba(234,243,250,0.55)" }}
               >
                 <MapPin size={13} />
                 {selected.location}
               </div>
 
               <div
                 className="text-2xl mb-5"
                 style={{ color: "#E3A857", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
               >
                 {selected.price}
               </div>
 
               <div className="grid grid-cols-4 gap-3 mb-5 pb-5" style={{ borderBottom: "1px dashed rgba(234,243,250,0.15)" }}>
                 <div className="text-center">
                   <BedDouble size={18} className="mx-auto mb-1" style={{ color: "#E3A857" }} />
                   <div className="text-[12px]" style={{ color: "rgba(234,243,250,0.65)" }}>{selected.beds} Beds</div>
                 </div>
                 <div className="text-center">
                   <Bath size={18} className="mx-auto mb-1" style={{ color: "#E3A857" }} />
                   <div className="text-[12px]" style={{ color: "rgba(234,243,250,0.65)" }}>{selected.baths} Baths</div>
                 </div>
                 <div className="text-center">
                   <Ruler size={18} className="mx-auto mb-1" style={{ color: "#E3A857" }} />
                   <div className="text-[12px]" style={{ color: "rgba(234,243,250,0.65)" }}>{selected.area}</div>
                 </div>
                 <div className="text-center">
                   <span
                     className="block text-[12px] mb-1"
                     style={{ color: "rgba(234,243,250,0.65)", fontFamily: "'JetBrains Mono', monospace" }}
                   >
                     Built
                   </span>
                   <div className="text-[12px]" style={{ color: "rgba(234,243,250,0.65)" }}>{selected.year}</div>
                 </div>
               </div>
 
               <p className="text-[14.5px] leading-relaxed mb-5" style={{ color: "rgba(234,243,250,0.8)" }}>
                 {selected.description}
               </p>
 
               <div
                 className="text-[11px] uppercase tracking-[0.1em] mb-2"
                 style={{ color: "#E3A857", fontFamily: "'JetBrains Mono', monospace" }}
               >
                 Amenities
               </div>
               <ul className="grid grid-cols-2 gap-2 mb-6">
                 {selected.amenities.map((a, i) => (
                   <li key={i} className="text-[13.5px]" style={{ color: "rgba(234,243,250,0.75)" }}>
                     — {a}
                   </li>
                 ))}
               </ul>
 
               <button
                 className="w-full py-3 flex items-center justify-center gap-2 text-[13px] uppercase tracking-[0.06em]"
                 style={{ backgroundColor: "#E3A857", color: "#0F2338", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
               >
                 <Phone size={14} />
                 Contact Agent
               </button>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }