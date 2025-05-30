import { GetIcon } from "@/utils/GetIcon";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const VerticalTimelineCard = ({ timeline }) => {
    const Icon = GetIcon(timeline.icon);
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "var(--timeline-background)",
                color: "#111827",
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)",
                borderRadius: "12px",
                padding: "2rem",
                border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
            contentArrowStyle={{ borderRight: "10px solid white" }}
            date={timeline.date}
            dateClassName="text-gray-800 font-medium dark:text-gray-100"
            iconStyle={{
                background: "#3b82f6",
                color: "#fff",
                boxShadow:
                    "0 0 0 4px #3b82f6, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
            }}
            icon={<Icon aria-hidden="true" />}
            className="dark:!text-white"
            itemScope
            itemType="https://schema.org/Event"
        >
            <meta itemProp="startDate" content={timeline.date} />
            <h3
                className="text-xl font-bold text-blue-500 mb-2"
                itemProp="name"
            >
                {timeline.title}
            </h3>
            <p
                className="text-gray-800 dark:text-gray-200"
                itemProp="description"
            >
                {timeline.description}
            </p>
            {timeline.location && (
                <meta itemProp="location" content={timeline.location} />
            )}
        </VerticalTimelineElement>
    );
};

export default VerticalTimelineCard;
