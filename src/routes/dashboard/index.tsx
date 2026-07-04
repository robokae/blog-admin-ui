import { Heading } from "@robokae/robokae-ui";
import { createFileRoute } from "@tanstack/react-router";
import Header from "../../components/header/Header";
import Layout from "../../components/layout/Layout";
import Section from "../../components/layout/section/Section";
import { PAGE_HEADER_LOGO } from "../../global/constants";
import Button from "../../components/button/Button";

export const Route = createFileRoute("/dashboard/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div>
      <Header>
        <Header.Content>{PAGE_HEADER_LOGO}</Header.Content>
      </Header>
      <Layout>
        <Section>
          <Heading as="h3">Dashboard</Heading>
          <Button as="cta" to="/create">
            New Post
          </Button>
        </Section>
      </Layout>
    </div>
  );
}
