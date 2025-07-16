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
          <Button
            title="Small"
            styles="text-small px-3 bg-blue-500 tex-white rounded-sm"
          />
          <Button
            title="Medium"
            styles="text-medium px-4 bg-green-500 tex-white rounded-md"
          />
          <Button
            title="Large"
            styles="text-large px-5 bg-yellow-500 tex-white rounded-lg"
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Button
            title="Rounded-sm"
            styles="text-small px-4 bg-red-500 tex-white rounded-sm"
          />
          <Button
            title="Rounded-md"
            styles="text-small px-4 bg-pink-500 tex-white rounded-md"
          />
          <Button
            title="Rounded-full"
            styles="text-small px-4 bg-purple-500 tex-white rounded-full"
          />
          <Button
            title="Rounded-lg"
            styles="text-small px-4 bg-black-500 tex-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
