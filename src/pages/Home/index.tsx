import { useNavigate } from "react-router-dom";

import Button from "src/components/Button";
import Card from "src/components/Card";

export function Component() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card>
        <div className="w-full flex justify-around gap-44">
          <Button onClick={() => navigate("/lexical")}>
            Ir para Analisador Léxico
          </Button>
          <Button onClick={() => navigate("/regex")}>
            Ir para Expressão Regular
          </Button>
        </div>
      </Card>
    </div>
  );
}

Component.displayName = "Home";
