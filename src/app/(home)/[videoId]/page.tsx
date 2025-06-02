interface pageProps {
  params: Promise<{ videoId: string }>;
}
const page = async ({ params }: pageProps) => {
  const { videoId } = await params;
  return <div>video id is here : {videoId}</div>;
};

export default page;
