import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-4">Landing Page Buttons</h1>

        <div className="flex flex-wrap gap-4">
          <Button title="Small Rounded" size="small" shape="rounded-sm" />
          <Button title="Medium Rounded" size="medium" shape="rounded-md" />
          <Button title="Large Rounded" size="large" shape="rounded-full" />
          <Button title="Large Rounded" size="large" shape="rounded-lg" />
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Button
            title="Custom Styled"
            size="large"
            shape="rounded-full"
            styles="bg-green-600 hover:bg-green-700"
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
