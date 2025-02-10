// "use client";

// import {
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarGroupLabel,
// } from "@/components/ui/sidebar";
// import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
// import Link from "next/link";
// import { useAuth, useClerk } from "@clerk/nextjs";

// const items = [
//   {
//     title: "History",
//     url: "/playlists/history",
//     icon: HistoryIcon,
//     auth: true,
//   },
//   {
//     title: "Liked Videos",
//     url: "/play/lists/liked",
//     icon: ThumbsUpIcon,
//     auth: true,
//   },
//   {
//     title: "All playlists",
//     url: "/feed/trending",
//     icon: ListVideoIcon,
//     auth: true,
//   },
// ];

// const PersonalSection = () => {
//   const clerk = useClerk();
//   const { isSignedIn } = useAuth();

//   return (
//     <SidebarGroup>
//       <SidebarGroupLabel>Tu</SidebarGroupLabel>
//       <SidebarGroupContent>
//         <SidebarMenu>
//           {items.map((item) => (
//             <SidebarMenuItem key={item.title}>
//               <SidebarMenuButton
//                 tooltip={item.title}
//                 asChild
//                 isActive={false} // cambiar el look eh la url
//                 // onClick={() => {}} con el onCLick si el usuario no esta logueado lo manda al login y se logue para de esta manera pueda ver su historia, liekd videos y sus playlists
//                 onClick={(e) => {
//                   e.preventDefault();
//                   if (item.auth && !isSignedIn) {
//                     clerk.openSignIn();
//                   }
//                 }}
//               >
//                 <Link href={item.url} className="flex items-center gap-4">
//                   <item.icon />
//                   <span className="text-sm">{item.title}</span>
//                 </Link>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarGroupContent>
//     </SidebarGroup>
//   );
// };

// export default PersonalSection;
