import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/ui/card';
import { Button } from '@/components/shadcn/ui/button';
import { Link } from 'react-router-dom';

interface AuthSectionProps {
  children: React.ReactNode;
  title: string;
  description: string;
  secondaryLink: {
    text: string;
    to: string;
  };
}

const AuthSection = ({
  children,
  title,
  description,
  secondaryLink,
}: AuthSectionProps) => {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-secondary">
      <section className="px-4 w-full">
        <Card className="w-full sm:max-w-[350px] sm:mx-auto overflow-hidden">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {children}

            <div className="mt-4">
              <div className="w-[1000px] h-[1px] bg-border mb-4 mx-[-50px]" />
              <Link to={secondaryLink.to}>
                <Button variant="link" className="w-full">
                  {secondaryLink.text}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default AuthSection;
